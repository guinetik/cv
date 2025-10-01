# Use a lightweight Alpine-based TeX Live image
FROM texlive/texlive:latest

# Install additional packages that might be needed
RUN tlmgr update --self && \
    tlmgr install \
        pgf \
        collection-fontsrecommended

# Set working directory
WORKDIR /workspace

# Copy all CV files
COPY . .

# Default command to compile the CV
CMD ["lualatex", "cv.tex"]
