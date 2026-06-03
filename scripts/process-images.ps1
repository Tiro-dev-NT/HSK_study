<#
.SYNOPSIS
    Batch convert PNG to WebP (Hanzi Genz asset pipeline).
    SOURCE (gitignored): content/assets/output/{wave}/*.png
    DEST   (committed):  assets/{category}/*.webp

.EXAMPLE
    .\scripts\process-images.ps1 -In content/assets/output/hskk-zhongji -Out assets/hskk/zhongji -Width 800
    .\scripts\process-images.ps1 -In content/assets/output/outfits-basic -Out assets/outfits/basic -Width 200 -Quality 90
#>

param(
    [Parameter(Mandatory = $false)] [string]$In,
    [Parameter(Mandatory = $false)] [string]$Out,
    [int]$Width   = 800,
    [int]$Quality = 85
)

# ──────────────────────────────────────────────
# 0. Check cwebp in PATH (PS 5.1 compatible)
# ──────────────────────────────────────────────
$cwebpCmd  = Get-Command cwebp -ErrorAction SilentlyContinue
$cwebpPath = if ($cwebpCmd) { $cwebpCmd.Source } else { $null }

if (-not $cwebpPath) {
    Write-Host ""
    Write-Host "ERROR: cwebp not found in PATH." -ForegroundColor Red
    Write-Host ""
    Write-Host "Install cwebp:" -ForegroundColor Yellow
    Write-Host "  Option 1 (winget):  winget install Google.WebP"
    Write-Host "  Option 2 (manual):  Download libwebp from https://developers.google.com/speed/webp/download"
    Write-Host "                      Extract, then add the bin/ folder to your System PATH."
    Write-Host ""
    Write-Host "  After installing, reopen your terminal and run this script again."
    Write-Host ""
    exit 1
}

# ──────────────────────────────────────────────
# 1. Show help if required params missing
# ──────────────────────────────────────────────
if (-not $In -or -not $Out) {
    Write-Host ""
    Write-Host "Usage:" -ForegroundColor Cyan
    Write-Host "  .\scripts\process-images.ps1 -In SOURCE_DIR -Out DEST_DIR [-Width 800] [-Quality 85]"
    Write-Host ""
    Write-Host "  -In      Source folder with *.png files  (e.g. content/assets/output/hskk-zhongji)"
    Write-Host "  -Out     Destination folder for *.webp   (e.g. assets/hskk/zhongji)"
    Write-Host "  -Width   Output width in px, default 800  (height auto-calculated to preserve ratio)"
    Write-Host "  -Quality Compression quality 0-100, default 85"
    Write-Host ""
    Write-Host "Examples per wave (Hanzi Genz pipeline):"
    Write-Host "  HSKK zhongji : -In content/assets/output/hskk-zhongji  -Out assets/hskk/zhongji  -Width 800"
    Write-Host "  Outfit       : -In content/assets/output/outfits-basic  -Out assets/outfits/basic -Width 200 -Quality 90"
    Write-Host "  Ambient      : -In content/assets/output/ambient-themes -Out assets/ambient        -Width 1280"
    Write-Host "  Pet          : -In content/assets/output/pets            -Out assets/pets           -Width 128"
    Write-Host ""
    exit 0
}

# ──────────────────────────────────────────────
# 2. Validate source folder
# ──────────────────────────────────────────────
if (-not (Test-Path $In)) {
    Write-Host "ERROR: Source folder not found: $In" -ForegroundColor Red
    exit 1
}

$pngFiles = Get-ChildItem -Path $In -Filter "*.png" -File
if ($pngFiles.Count -eq 0) {
    Write-Host "WARNING: No *.png files found in: $In" -ForegroundColor Yellow
    exit 0
}

# ──────────────────────────────────────────────
# 3. Create destination folder if needed
# ──────────────────────────────────────────────
if (-not (Test-Path $Out)) {
    New-Item -ItemType Directory -Force -Path $Out | Out-Null
    Write-Host "Created folder: $Out" -ForegroundColor Green
}

# ──────────────────────────────────────────────
# 4. Process each file
# ──────────────────────────────────────────────
$total   = $pngFiles.Count
$done    = 0
$bytesIn = 0L
$bytesOut= 0L
$errors  = @()

Write-Host ""
Write-Host "Processing $total PNG files -> WebP  (width=$Width px, quality=$Quality)" -ForegroundColor Cyan
Write-Host "  $In  ->  $Out"
Write-Host ""

foreach ($png in $pngFiles) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($png.Name)
    $outFile  = Join-Path $Out "$baseName.webp"
    $sizeIn   = $png.Length
    $bytesIn += $sizeIn

    # cwebp -q <Quality> -resize <Width> 0 <input> -o <output>
    # height=0 means proportional
    $null = & $cwebpPath -q $Quality -resize $Width 0 "$($png.FullName)" -o "$outFile" 2>&1
    $exitCode = $LASTEXITCODE

    if ($exitCode -ne 0) {
        $errors += $png.Name
        Write-Host ("  FAIL [{0}/{1}]  {2}" -f ($done + 1), $total, $png.Name) -ForegroundColor Red
    } else {
        $sizeOut  = (Get-Item $outFile).Length
        $bytesOut += $sizeOut
        $ratio    = if ($sizeIn -gt 0) { [math]::Round((1 - $sizeOut / $sizeIn) * 100, 1) } else { 0 }
        Write-Host ("  OK  [{0}/{1}]  {2,-40}  {3,7} KB  ->  {4,6} KB  (-{5}%)" -f `
            ($done + 1), $total, $png.Name,
            [math]::Round($sizeIn  / 1KB, 1),
            [math]::Round($sizeOut / 1KB, 1),
            $ratio) -ForegroundColor Green
        $done++
    }
}

# ──────────────────────────────────────────────
# 5. Summary
# ──────────────────────────────────────────────
$kbIn  = [math]::Round($bytesIn  / 1KB, 1)
$kbOut = [math]::Round($bytesOut / 1KB, 1)
$saved = if ($bytesIn -gt 0) { [math]::Round((1 - $bytesOut / $bytesIn) * 100, 1) } else { 0 }

Write-Host ""
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host ("  Done: {0}/{1} files  |  Errors: {2}" -f $done, $total, $errors.Count) -ForegroundColor Cyan
Write-Host ("  Size: {0} KB  ->  {1} KB  (saved {2}%)" -f $kbIn, $kbOut, $saved) -ForegroundColor Cyan
Write-Host "  Output: $Out" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

if ($errors.Count -gt 0) {
    Write-Host ""
    Write-Host "Failed files:" -ForegroundColor Yellow
    $errors | ForEach-Object { Write-Host "  - $_" }
}

Write-Host ""
Write-Host "Next steps (Hanzi Genz pipeline):" -ForegroundColor White
Write-Host "  1. QA the WebP files in: $Out"
Write-Host "  2. Update code: change path content/assets/output/ -> assets/  and ext .png -> .webp"
Write-Host "  3. git add assets/ -> commit -> push -> Cloudflare deploy"
Write-Host ""
