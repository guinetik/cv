#!/usr/bin/env pwsh

Write-Host "Building CV with Docker (WSL)..." -ForegroundColor Green

# Build the Docker image using WSL
wsl docker build -t cv-builder .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Compiling CV to PDF..." -ForegroundColor Green

# Run the compilation using WSL
wsl docker run --rm -v "/mnt/d/Developer/cv:/workspace" cv-builder sh -c "cd en && lualatex cv.tex && cd ../pt && lualatex cv.tex"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Compilation failed!" -ForegroundColor Red
    exit 1
}

Write-Host "CVs compiled successfully! Check en/cv.pdf and pt/cv.pdf" -ForegroundColor Green
