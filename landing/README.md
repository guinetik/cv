# CV Landing Page

A sleek landing page for Guinetik's CV with random CodePen experiments showcase.

## Features

- **Smart CV Download**: Automatically detects browser language and downloads the appropriate CV version (English/Portuguese)
- **Random CodePen Showcase**: Displays a random experiment from the collection on each page load
- **Interactive Hover**: Hover over the CodePen embed to see title and link
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Modern UI**: Dark theme with smooth animations

## Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Structure

- `src/App.js` - Main application logic with experiments array
- `src/style.css` - Tailwind CSS styles and custom components
- `logo.svg` - Your logo file
- `index.html` - Main HTML template

## Customization

To add more experiments, edit the `experiments` array in `src/App.js`:

```javascript
const experiments = [
  {
    title: "Your Experiment Title",
    url: "https://codepen.io/guinetik/full/YOUR_PEN_ID",
    type: "codepen",
    link: "https://codepen.io/guinetik/pen/YOUR_PEN_ID",
  },
  // ... more experiments
];
```

## Deployment

The page is configured to deploy to the `gh-pages` branch with the base path `/cv/` for GitHub Pages.
