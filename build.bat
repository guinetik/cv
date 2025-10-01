@echo off
echo Building CV with Docker...
docker build -t cv-builder .
if %errorlevel% neq 0 (
    echo Build failed!
    exit /b 1
)

echo Compiling CVs to PDF...
docker run --rm -v "%cd%":/workspace cv-builder sh -c "cd en && lualatex cv.tex && cd ../pt && lualatex cv.tex"
if %errorlevel% neq 0 (
    echo Compilation failed!
    exit /b 1
)

echo CVs compiled successfully! Check en/cv.pdf and pt/cv.pdf
