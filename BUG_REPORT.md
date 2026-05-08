# 🐛 BUG REPORT — Hanzi Genz App

**Ngày kiểm tra:** 2026-05-08  
**Phạm vi:** Toàn bộ JS modules + index.html

---

## 🔴 MỨC ĐỘ NGHIÊM TRỌNG (Critical)

### BUG-C01: `srs.js` ghi đè `srsData` global thay vì `AppState.srsData`
- **File:** `js/srs.js` (line 13, 63-64)
- **Mô tả:** `loadSRS()` gán `srsData = JSON.parse(...)` — ghi đè biến global alias nhưng **không cập nhật `AppState.srsData`**. Tương tự, `saveSRS()` dùng `srsData` (global alias) thay vì `AppState.srsData`. Sau khi `loadSRS()` chạy, `AppState.srsData` và `srsData` **trỏ tới 2 object khác nhau**.
- **Tác động:** SRS data bị desync giữa `AppState.srsData` và global `srsData`. Các module dùng `AppState.srsData` (gamification, sync, rightsidebar, my-vocab) sẽ đọc data cũ.
- **Tái hiện:** Mở app → `loadSRS()` chạy → `srsData` giờ là object mới, `AppState.srsData` vẫn là object cũ từ state.js init.
- **Phương án sửa:**
```js
// srs.js - loadSRS()
function loadSRS() {
  AppState.srsData = JSON.parse(localStorage.getItem(SRS_KEY) || '{}');
  srsData = AppState.srsData; // re-point alias
}

function saveSRS() {
  localStorage.setItem(SRS_KEY, JSON.stringify(AppState.srsData));
}

// updateSRSCard: thay `srsData[hanzi]` bằng `AppState.srsData[hanzi]`
```

### BUG-C02: `updateSRSCard()` kiểm tra sai trong quiz.js
- **File:** `js/quiz.js` (line 310, 316)
- **Mô tả:** Dùng `typeof updateSRSCard !== 'undefined'` thay vì `typeof updateSRSCard === 'function'`. `typeof` một function trả về `'function'`, không bao giờ là `'undefined'` nếu đã load. Nhưng lỗi thực sự là: nếu `updateSRSCard` chưa defined, code sẽ throw `ReferenceError` trước khi `typeof` chạy... **thực ra không**, `typeof` an toàn với undeclared vars. Tuy nhiên so sánh `!== 'undefined'` sẽ match cả khi giá trị là string/number/object — **logic đúng nhưng style không chính xác**.
- **Tác động:** Thấp — hoạt động đúng nhưng không theo convention.
- **Phương án sửa:** Đổi thành `typeof updateSRSCard === 'function'`.

### BUG-C03: Backward-compat aliases là primitives, không auto-sync
- **File:** `js/state.js` (line 140-161)
- **Mô tả:** Các biến `fcIndex`, `qIndex`, `qScore`, `qAnswered`, `searchMode` là **primitives** (number, boolean, string). Khi gán `var fcIndex = AppState.fcIndex`, chúng **copy giá trị**, không reference. Code phải thủ công sync `fcIndex = AppState.fcIndex` sau mỗi thay đổi.
- **Tác động:** Nếu bất kỳ module nào quên sync, state sẽ bị desync. Hiện tại session.js và quiz.js đều sync thủ công → **hoạt động nhưng fragile**.
- **Phương án sửa:** 
  - Ngắn hạn: Audit tất cả nơi modify `AppState.fcIndex` etc. và đảm bảo alias được sync.
  - Dài hạn: Loại bỏ hoàn toàn backward-compat aliases, dùng `AppState.*` trực tiếp.

---

## 🟠 MỨC ĐỘ TRUNG BÌNH (Medium)

### BUG-M01: Script load order — Auth/Sync/RightSidebar load SAU `app.js`
- **File:** `index.html` (line 327-334)
- **Mô tả:** `app.js` load ở line 327, nhưng `supabase.js`, `auth.js`, `sync.js`, `rightsidebar.js` load ở line 331-334. Trong `app.js`, `DOMContentLoaded` callback gọi `Auth.setup()`, `Auth.init()`, `RightSidebar.init()`.
- **Phân tích:** Hoạt động đúng vì `DOMContentLoaded` fire **sau tất cả `<script>` tags** đã execute (vì scripts là synchronous blocking). Tuy nhiên:
  - Nếu Supabase CDN (line 329-330) load chậm/bị chặn → `SB = null` → Auth/Sync silent fail.
  - Code structure misleading — `app.js` comment nói "must be last" nhưng thực tế không phải last.
- **Phương án sửa:** Di chuyển CDN scripts lên trước `app.js`, hoặc di chuyển `auth.js`, `sync.js`, `rightsidebar.js` lên trước `app.js`.

### BUG-M02: `decks.js` dùng `let`/`const`/arrow functions nhưng app target older browsers
- **File:** `js/decks.js` (toàn bộ file)
- **Mô tả:** `decks.js` dùng ES6+ syntax (`let`, `const`, `=>`, template literals, destructuring, `...spread`) trong khi **tất cả module khác** dùng `var` + `function(){}` cho browser compatibility. Tương tự `srs.js` cũng dùng `const`/`let`/arrow.
- **Tác động:** Không hoạt động trên IE11 hoặc old Android WebView. Nếu app không target các browser cũ thì OK, nhưng **inconsistency** giữa modules gây confusion.
- **Phương án sửa:** Quyết định target browsers và đồng bộ syntax. Nếu chỉ modern: OK. Nếu cần compat: transpile hoặc rewrite.

### BUG-M03: `playTTS` trong `decks.js` gọi global `playTTS()` nhưng nó là alias của `Dictionary.playTTS()`
- **File:** `js/decks.js` (line 335, 459)
- **Mô tả:** `decks.js` gọi `playTTS(w.h)` — global function defined trong `dictionary.js` (line 335). Nhưng `decks.js` load trước `dictionary.js` trong init order (decks.js line 320, dictionary.js line 313 trong index.html). Tuy nhiên `playTTS` chỉ được **gọi** khi user click, lúc đó `dictionary.js` đã load → **OK**.
- **Tác động:** Không lỗi thực tế, nhưng nếu ai gọi `playTTS` trong `setupDecks()` sẽ crash.
- **Phương án sửa:** Thêm guard `if (typeof playTTS === 'function')`.

### BUG-M04: `appSettings` undefined nếu Settings.load() fail
- **File:** Nhiều file (`session.js:205`, `dictionary.js:298`, `rightsidebar.js:114`)
- **Mô tả:** Nhiều module check `typeof appSettings !== 'undefined'` trước khi dùng. Nhưng `appSettings` được define ở đâu? Trong `settings.js` (chưa review nhưng phải define global `appSettings`). Nếu `Settings.load()` crash hoặc `settings.js` fail load → `appSettings` undefined.
- **Tác động:** Code có guard `typeof appSettings !== 'undefined'` → fallback OK. Nhưng `session.js:205` dùng `typeof appSettings === 'undefined' || appSettings.srsMode !== 'advanced'` — nếu `appSettings` exists nhưng `srsMode` undefined → defaults to simple mode → **OK**.
- **Phương án sửa:** Đảm bảo `appSettings` luôn được init với defaults trong `state.js`.

### BUG-M05: `decks.js` lưu vào `hsk_decks` nhưng `sync.js` đọc/ghi `hsk_user_decks`
- **File:** `js/decks.js` (line 60) vs `js/sync.js` (line 73, 165, 294)
- **Mô tả:** `decks.js` dùng `localStorage.setItem('hsk_decks', ...)` nhưng `sync.js` dùng `localStorage.getItem('hsk_user_decks')`. **Hai key khác nhau!**
- **Tác động:** **User decks KHÔNG ĐƯỢC SYNC lên cloud.** Khi sync, cloud sẽ nhận empty array `[]`. Khi pull, cloud decks sẽ ghi vào `hsk_user_decks` nhưng `decks.js` đọc từ `hsk_decks` → **mất data**.
- **Phương án sửa:** Thống nhất dùng 1 key. Recommended: đổi `sync.js` sang dùng `hsk_decks`, hoặc đổi `decks.js` sang `hsk_user_decks`.

```js
// sync.js pushAll() - sửa:
var rawDecks = JSON.parse(localStorage.getItem('hsk_decks') || '{}');
var userDecks = Object.values(rawDecks).filter(function(d) { return !d.isSystem; });

// sync.js pullAll() - sửa: 
// Cần convert format vì decks.js dùng object { id: deck }, sync.js dùng array
```

### BUG-M06: `sync.js` deck format mismatch vs `decks.js`
- **File:** `js/sync.js` (line 73-85, 162-166)
- **Mô tả:** `sync.js` push decks dạng `{ name, word_ids: [hanzi] }` và pull về dạng `[{ name, words: [{h}] }]`. Nhưng `decks.js` lưu dạng `{ deckId: { id, title, isSystem, words: [fullWordObj], icon, color, createdAt } }`. Format hoàn toàn khác nhau:
  - sync dùng `name`, decks dùng `title`
  - sync lưu `word_ids` (chỉ hanzi), decks lưu `words` (full objects)
  - sync lưu array, decks lưu object by id
- **Tác động:** Ngay cả khi fix BUG-M05, format vẫn incompatible → sync sẽ corrupt deck data.
- **Phương án sửa:** Rewrite sync deck logic để match `decks.js` format.

---

## 🟡 MỨC ĐỘ THẤP (Low)

### BUG-L01: `catch` without parameter trong `decks.js`
- **File:** `js/decks.js` (line 724)
- **Mô tả:** `catch { alert('Lỗi đọc file!'); }` — thiếu error parameter. Cần `catch(e)`.
- **Tác động:** Syntax error trên một số browsers cũ (catch binding optional chỉ từ ES2019).
- **Phương án sửa:** `catch(e) { alert('Lỗi đọc file!'); }`

### BUG-L02: Heatmap tính ngày sai khi timezone offset
- **File:** `js/rightsidebar.js` (line 163)
- **Mô tả:** `date.toISOString().split('T')[0]` trả về UTC date, nhưng `dailyXP` keys có thể là local date. Nếu user ở UTC+7 và học lúc 22:00 → UTC là ngày hôm sau → heatmap hiện sai ngày.
- **Tác động:** Heatmap cell bị lệch 1 ngày cho user ở timezone dương.
- **Phương án sửa:** Dùng local date format nhất quán: `new Date().toLocaleDateString('sv-SE')` hoặc manual `YYYY-MM-DD`.

### BUG-L03: Streak calendar duplicate render
- **File:** `js/gamification.js` (line 116) + `js/rightsidebar.js` (line 31)
- **Mô tả:** `Gamification.updateStats()` gọi `renderStreakCalendar()` (cho home page) VÀ `RightSidebar.render()` (cho right sidebar). Cả hai render streak calendar riêng biệt → redundant nhưng không lỗi.
- **Tác động:** Performance nhẹ, không lỗi visual.

### BUG-L04: `Dictionary.show()` không tồn tại
- **File:** `js/rightsidebar.js` (line 233)
- **Mô tả:** Gọi `Dictionary.show(word)` nhưng Dictionary module chỉ có `Dictionary.openModal(word)`.
- **Tác động:** Click related word trong right sidebar → `TypeError: Dictionary.show is not a function`.
- **Phương án sửa:** Đổi thành `Dictionary.openModal(word)`.

### BUG-L05: `loadDecks()` gọi khi chưa có `progress` variable
- **File:** `js/decks.js` (line 85)
- **Mô tả:** `getDeckProgress()` dùng `progress[deck.level]` — biến global alias từ `state.js`. Vì `state.js` load trước `decks.js` → OK. Nhưng nếu `loadSRS()` (BUG-C01) đã override `srsData`, thì `progress` alias vẫn trỏ đúng vì `progress = AppState.progress` là object reference (không phải primitive).
- **Tác động:** Không lỗi.

### BUG-L06: Memory leak tiềm ẩn — event listeners không cleanup
- **File:** `js/decks.js`, `js/session.js`, `js/quiz.js`
- **Mô tả:** Mỗi khi navigate tới page, `setup()` được gọi lại → addEventListener được gắn thêm vào cùng element. VD: `Quiz.setup()` gắn click handlers mỗi lần vào quiz page.
- **Tác động:** Handlers trùng lặp, mỗi click fire nhiều lần sau nhiều lần navigate.
- **Phương án sửa:** Dùng event delegation hoặc remove handlers trước khi add lại, hoặc check `_initialized` flag.

### BUG-L07: `navigateTo` trong `decks.js` gọi global function cũ
- **File:** `js/decks.js` (line 734)
- **Mô tả:** `showDeckMenu()` gọi `navigateTo('vault')` — global compat function. Hoạt động vì `router.js` define `function navigateTo(page) { Router.navigateTo(page); }`.
- **Tác động:** Không lỗi, chỉ inconsistent style.

---

## 🟢 TRƯỜNG HỢP ĐẶC BIỆT (Edge Cases)

### EDGE-01: localStorage đầy
- **Scenario:** User học nhiều, srsData quá lớn → `localStorage.setItem()` throw `QuotaExceededError`.
- **Hiện trạng:** `AppState.save()` có try/catch → log error nhưng **silent fail** → user mất data mà không biết.
- **Phương án:** Hiện toast cảnh báo user khi save fail.

### EDGE-02: Supabase CDN bị chặn (China/corporate firewall)
- **Scenario:** CDN `cdn.jsdelivr.net` bị chặn → `window.supabase` undefined → `SB = null`.
- **Hiện trạng:** Auth/Sync disabled silently. User không biết tại sao không thể đăng nhập.
- **Phương án:** Hiện badge/warning khi `SB === null` sau page load.

### EDGE-03: Concurrent tab editing
- **Scenario:** User mở 2 tab → học ở tab 1 → tab 2 không biết → sync conflict.
- **Hiện trạng:** Không có `storage` event listener → tab 2 dùng stale data.
- **Phương án:** Listen `window.addEventListener('storage', ...)` để reload state.

### EDGE-04: Empty HSK_DATA
- **Scenario:** Nếu bất kỳ `hsk*.js` file nào fail load → `HSK_DATA[level] = []`.
- **Hiện trạng:** `decks.js:54` log warning. `getAllWords()` trả ít từ. Quiz/Session chạy với ít data.
- **Phương án:** Thêm retry hoặc hiện error rõ ràng trên UI.

### EDGE-05: HanziWriter CDN fail
- **Scenario:** `hanzi-writer.min.js` fail load → `HanziWriter` undefined.
- **Hiện trạng:** `dictionary.js:162` check `typeof HanziWriter !== 'undefined'` → stroke container hidden → **OK**.

### EDGE-06: SpeechSynthesis không khả dụng
- **Scenario:** Browser không support Web Speech API hoặc không có Chinese voice.
- **Hiện trạng:** `dictionary.js:299` check `window.speechSynthesis` → silent no-op → **OK** nhưng user không biết tại sao không có âm thanh.

### EDGE-07: First-time user với empty data
- **Scenario:** User mới, chưa có data nào trong localStorage.
- **Hiện trạng:** Tất cả `JSON.parse(... || '{}')` có fallback → **OK**. Home page hiện 0/0.

### EDGE-08: Survival mode infinite loop potential  
- **Scenario:** Survival mode thêm 20 words mỗi khi hết deck (quiz.js:331-336). Nếu `getAllWords()` trả empty → thêm empty → loop forever.
- **Hiện trạng:** Có check `allWords.length < 20` ở `_startSurvival` nhưng không check ở loop.
- **Phương án:** Thêm guard trong loop.

---

## 📊 TỔNG KẾT

| Mức độ | Số lượng | Cần fix ngay |
|--------|----------|--------------|
| 🔴 Critical | 3 | ✅ BUG-C01, BUG-M05, BUG-M06 |
| 🟠 Medium | 6 | ✅ BUG-M01, BUG-M04 |
| 🟡 Low | 7 | ⬜ Khi có thời gian |
| Edge Cases | 8 | ⬜ Cải thiện UX |

### ƯU TIÊN SỬA (Top 5):
1. **BUG-C01** — SRS data desync (ảnh hưởng core learning)
2. **BUG-M05 + M06** — Deck sync broken (mất user data)
3. **BUG-L04** — Related word click crash
4. **BUG-L06** — Event listener duplication
5. **BUG-M01** — Script order clarification

---

## ✅ ĐIỂM TỐT

- Try/catch trong `app.js` init → 1 module fail không crash toàn app
- Router fetch error handling tốt, hiện fallback UI
- Auth/Sync có error handling đầy đủ
- localStorage parse đều có try/catch
- Backward-compat aliases cho phép migration dần dần
- CDN dependency checks (`typeof X !== 'undefined'`)
- Sync có dangerous push detection (tránh ghi đè cloud khi local rỗng)
