# João Guilherme Ribeiro de Sousa - CV

Professional CV built with LaTeX and automated CI/CD pipeline.

## 📄 Latest CV

[![Release](https://img.shields.io/github/v/release/guinetik/cv?style=flat-square)](https://github.com/guinetik/cv/releases/latest)
[![Build Status](https://img.shields.io/github/actions/workflow/status/guinetik/cv/build-cv.yml?style=flat-square)](https://github.com/guinetik/cv/actions)

Download the latest version: **[📥 Download CV (PDF)](https://github.com/guinetik/cv/releases/latest)**

## 🚀 Features

- **Clean LaTeX Design**: Professional CV template with custom styling
- **Docker-based Build**: Portable, reproducible builds without local LaTeX installation
- **Automated CI/CD**: GitHub Actions automatically builds and releases PDFs
- **Version Control**: Date-based versioning with release history
- **Font Support**: Custom Source Sans Pro fonts for professional typography

## 🛠️ Local Development

### Prerequisites

- Docker (with WSL support on Windows)
- Git

### Building Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/guinetik/cv.git
   cd cv
   ```

2. **Build with Docker**
   ```bash
   # Using the provided script (Windows PowerShell)
   .\build.ps1
   
   # Or manually with Docker
   docker build -t cv-builder .
   docker run --rm -v "$(pwd):/workspace" cv-builder lualatex en/cv.tex
   ```

3. **View the result**
   - The compiled PDF will be generated as `en/cv.pdf`

### File Structure

```
cv/
├── en/                      # English version
│   ├── cv.tex              # Main LaTeX document
│   ├── yaac-another-awesome-cv.cls  # Custom document class
│   ├── section_*.tex       # Modular content sections
│   ├── fonts/              # Source Sans Pro font files
│   └── *.png, *.jpg        # Images and assets
├── Dockerfile              # Docker build configuration
├── .github/workflows/      # GitHub Actions CI/CD
└── build.ps1              # Local build script
```

## 🔄 Automated Workflow

This repository uses GitHub Actions for automated CV generation:

- **Trigger**: Every push to `master`/`main` branch
- **Process**: 
  1. Builds CV using Docker
  2. Creates a new release with date-based versioning
  3. Attaches the PDF to the release
- **Result**: Latest CV always available in [Releases](https://github.com/guinetik/cv/releases)

### Versioning

Releases use date-based versioning: `YYYY.MM.DD` (e.g., `v2024.01.15`)

## 📝 Editing the CV

### Content Sections

The CV is modularized into separate files:

- `section_headline.tex` - Professional summary
- `section_competences.tex` - Skills and technologies
- `section_experience_short.tex` - Work experience
- `section_langues.tex` - Languages
- `section_scolarite.tex` - Education
- `section_projets.tex` - Projects

### Making Changes

1. Edit the relevant `.tex` files
2. Test locally: `.\build.ps1`
3. Commit and push to `master`
4. GitHub Actions will automatically create a new release

## 🎨 Customization

### Colors

The CV supports multiple color themes. Edit `cv.tex` to change:

```latex
\documentclass[localFont,alternative,green]{yaac-another-awesome-cv}
```

Available options: `green`, `red`, `indigo`, `orange`, `monochrome`

### Fonts

Custom fonts are included in the `fonts/` directory. The template uses Source Sans Pro for a clean, professional look.

## 📋 Template Credits

Based on the excellent [YAAC: Another Awesome CV](https://github.com/darwiin/yaac-another-awesome-cv) template by Christophe Roger (Darwiin).

- **Original Template**: CC BY-SA 4.0
- **This Implementation**: Apache License 2.0

## 🤝 Contributing

This is a personal CV repository, but feel free to:

- Report issues with the build process
- Suggest improvements to the automation
- Fork for your own CV template

## 📞 Contact

- **LinkedIn**: [guinetik](https://linkedin.com/in/guinetik)
- **GitHub**: [guinetik](https://github.com/guinetik)
- **Email**: guinetik@gmail.com

---
