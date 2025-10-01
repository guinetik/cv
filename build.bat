@echo off
echo Building CV with Docker...
docker build -t cv-builder .
if %errorlevel% neq 0 (
    echo Build failed!
    exit /b 1
)

echo Compiling CV to PDF...
docker run --rm -v "%cd%":/workspace cv-builder lualatex cv.tex
if %errorlevel% neq 0 (
    echo Compilation failed!
    exit /b 1
)

echo CV compiled successfully! Check cv.pdf
