# Data Extraction Guide

This guide explains how to populate the `tours-data.js` file with actual data from the Wild Animal Sanctuary audio tours page.

## Overview

The Wild Animal Sanctuary audio tours page (https://www.wildanimalsanctuary.org/audio-tours) contains links to approximately 19 collections of audio files and text transcripts. This data needs to be extracted and added to the `tours-data.js` file.

## Manual Extraction Steps

### Step 1: Access the Source Page
1. Visit https://www.wildanimalsanctuary.org/audio-tours
2. Identify all collection links (approximately 19 collections)

### Step 2: For Each Collection
For each collection page, extract:
- Collection name
- List of individual audio tours within that collection

### Step 3: For Each Tour
For each tour within a collection, extract:
- Tour title/name
- Audio file URL (typically .mp3 format)
- Transcript URL (typically .txt or .pdf format)
- Description (if available)
- Location information (if available - for future geolocation feature)

## Data Format

Use this template in `tours-data.js`:

```javascript
{
    collectionName: "Name of Collection",
    tours: [
        {
            id: uniqueNumber,  // Increment for each tour across all collections
            title: "Tour Title",
            description: "Brief description of what this tour covers",
            audioUrl: "https://www.wildanimalsanctuary.org/path/to/audio.mp3",
            transcriptUrl: "https://www.wildanimalsanctuary.org/path/to/transcript.txt",
            location: null  // or { lat: 40.123, lng: -104.456 } when available
        }
    ]
}
```

## Automated Extraction (Optional)

If you prefer to automate the extraction:

### Using Browser Console

1. Open https://www.wildanimalsanctuary.org/audio-tours in your browser
2. Open the browser's Developer Tools (F12)
3. Go to the Console tab
4. Run a script to extract links:

```javascript
// Extract all collection links
const collections = [];
document.querySelectorAll('a[href*="audio"]').forEach((link, idx) => {
    collections.push({
        name: link.textContent.trim(),
        url: link.href
    });
});
console.log(JSON.stringify(collections, null, 2));
```

5. Visit each collection URL and extract tour information
6. Format the data according to the template above

### Using a Web Scraping Tool

If you have Python installed, you can use this script template:

```python
import requests
from bs4 import BeautifulSoup
import json

# Fetch the main page
url = "https://www.wildanimalsanctuary.org/audio-tours"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Extract collection links
collections = []
# Add your extraction logic here based on the page structure

print(json.dumps(collections, indent=2))
```

## Validation

After populating the data:

1. Run the test: `node test.js`
2. Open `index.html` in a browser
3. Verify:
   - All tours are displayed
   - Search functionality works
   - Audio and transcript links are valid
   - Sorting works correctly

## Tips

- Use sequential IDs (1, 2, 3, ...) for easy tracking
- Ensure all URLs are absolute (start with http:// or https://)
- Keep descriptions concise (1-2 sentences)
- Maintain consistent formatting across all entries
- Test links to ensure they work before adding them

## Future Enhancements

When location data becomes available:
- Add latitude and longitude coordinates to each tour
- Update the location field from `null` to `{ lat: latitude, lng: longitude }`
- The application will automatically display location badges
- Map functionality can then be implemented

## Contact

If you encounter issues or need clarification, please refer to the repository's issue tracker or contact the maintainer.
