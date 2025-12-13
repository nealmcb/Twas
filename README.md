# TWAS - The Wild Animal Sanctuary Audio Tours

A consolidated web interface for browsing all audio tours and transcripts from the Wild Animal Sanctuary.

## ⚠️ DISCLAIMER

**This is an unauthorized site using copyrighted content from [https://www.wildanimalsanctuary.org/audio-tours](https://www.wildanimalsanctuary.org/audio-tours).** It is meant to demonstrate possibilities for improving the user experience. All code for this site is available in this repository at [https://github.com/nealmcb/Twas](https://github.com/nealmcb/Twas). I'll quickly take it down if requested.

## Live Site

The site is automatically deployed to GitHub Pages at: https://nealmcb.github.io/Twas/

## Overview

This project provides a single, unified web page that indexes audio tours from the Wild Animal Sanctuary (https://www.wildanimalsanctuary.org/audio-tours). The website has approximately 19 collections; this implementation currently includes 17 sample collections as a demonstration. Instead of navigating through multiple collection pages, visitors can:

- Browse all audio tours in one place
- Search tours by name, animal type, or description
- Access both audio files and text transcripts
- Sort tours alphabetically

## Features

### Current Features
- **Unified Index**: Audio tours from multiple collections displayed in a single page (17 sample collections currently included, expandable to the full ~19 collections from the website)
- **Search Functionality**: Real-time search across tour titles, descriptions, and collection names
- **Sorting Options**: Sort tours alphabetically in ascending or descending order
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Direct Access**: Quick links to both audio files and text transcripts
- **Clean Interface**: Modern, accessible design with clear navigation

### Future Features
- **Geolocation Support**: Interactive map showing tour locations
- **Proximity Alerts**: Notifications when visitors are near specific tour points
- **Offline Support**: Ability to download tours for offline access
- **Multi-language Support**: Transcripts in multiple languages

## Usage

### For Visitors
Simply open `index.html` in a web browser to access the audio tours index.

1. **Browse**: Scroll through all available tours
2. **Search**: Use the search box to find specific tours
3. **Listen**: Click "Listen to Audio" to hear the tour
4. **Read**: Click "Read Transcript" to view the text version

### For Administrators

#### Adding New Tours
Edit `tours-data.js` to add or update tour information:

```javascript
{
    collectionName: "Collection Name",
    tours: [
        {
            id: uniqueId,
            title: "Tour Title",
            description: "Tour description",
            audioUrl: "https://url-to-audio-file.mp3",
            transcriptUrl: "https://url-to-transcript.txt",
            location: null // or { lat: latitude, lng: longitude }
        }
    ]
}
```

#### Updating Styles
Modify `styles.css` to customize the appearance.

#### Updating Functionality
Modify `app.js` to change behavior or add features.

## Technical Details

### File Structure
- `index.html` - Main HTML page
- `styles.css` - Stylesheet for the page
- `app.js` - JavaScript for search, sort, and display functionality
- `tours-data.js` - Data structure containing all tour information
- `README.md` - This documentation file

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### No Build Required
This is a static website that requires no build process. Simply serve the files from any web server or open `index.html` directly.

## Data Source

The tour data should be extracted from: https://www.wildanimalsanctuary.org/audio-tours

Each collection page contains links to individual audio files and transcripts that should be added to the `tours-data.js` file.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions:

- **Automatic Deployment**: Any changes pushed to the `main` branch will automatically trigger a deployment
- **Manual Deployment**: The workflow can also be triggered manually from the Actions tab in GitHub
- **Live URL**: https://nealmcb.github.io/Twas/

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) runs automatically
3. The workflow uploads all files to GitHub Pages
4. The site becomes available at the GitHub Pages URL within a few minutes

## Contributing

To contribute to this project:
1. Update tour data in `tours-data.js`
2. Test changes by opening `index.html` in a browser
3. Ensure all links work correctly
4. Submit changes via pull request
5. Once merged to `main`, changes will be automatically deployed

## Future Development: Geolocation

The codebase is prepared for future geolocation features:
- Tour data structure includes `location` field (currently null)
- Placeholder function `initializeMap()` in `app.js`
- When implemented, visitors will see:
  - Interactive map with tour locations
  - "Near me" filtering
  - Turn-by-turn navigation within the sanctuary

## License

Please respect the Wild Animal Sanctuary's content and usage rights.