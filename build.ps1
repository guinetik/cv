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
wsl docker run --rm -v "$(wsl wslpath -w ${PWD}):/workspace" cv-builder lualatex cv.tex
if ($LASTEXITCODE -ne 0) {
    Write-Host "Compilation failed!" -ForegroundColor Red
    exit 1
}

Write-Host "CV compiled successfully! Check cv.pdf" -ForegroundColor Green
