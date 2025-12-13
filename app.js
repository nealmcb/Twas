// Main Application Logic for Audio Tours Index

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Render all kiosks with their tours in linear format
function renderKiosks(collections) {
    const container = document.getElementById('toursContainer');
    const noResults = document.getElementById('noResults');

    container.innerHTML = '';

    if (collections.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    container.style.display = 'block';
    noResults.style.display = 'none';

    collections.forEach(collection => {
        // Create kiosk section
        const kioskSection = document.createElement('section');
        kioskSection.className = 'kiosk-section';

        // Kiosk header with link
        const header = document.createElement('div');
        header.className = 'kiosk-header';

        // Get the kiosk URL from the first tour
        const kioskUrl = collection.tours.length > 0 ? collection.tours[0].audioUrl : '#';

        header.innerHTML = `
            <h2>${escapeHtml(collection.collectionName)}</h2>
            <a href="${escapeHtml(kioskUrl)}" class="kiosk-link" target="_blank" rel="noopener noreferrer">
                Official audio and transcripts ➜
            </a>
        `;
        kioskSection.appendChild(header);

        // Render each tour in the collection
        collection.tours.forEach(tour => {
            const tourDiv = document.createElement('div');
            tourDiv.className = 'tour-item';
            tourDiv.innerHTML = `
                <h3>${escapeHtml(tour.title)}</h3>
                <p>${escapeHtml(tour.description)}</p>
            `;
            kioskSection.appendChild(tourDiv);
        });

        container.appendChild(kioskSection);
    });
}

// Filter collections based on search query
function filterCollections(collections, query) {
    if (!query) return collections;

    const lowerQuery = query.toLowerCase();

    // Filter collections that have matching tours
    return collections
        .map(collection => {
            const matchingTours = collection.tours.filter(tour => {
                return tour.title.toLowerCase().includes(lowerQuery) ||
                       tour.description.toLowerCase().includes(lowerQuery) ||
                       collection.collectionName.toLowerCase().includes(lowerQuery);
            });

            // Only include collections that have at least one matching tour
            if (matchingTours.length > 0) {
                return {
                    ...collection,
                    tours: matchingTours
                };
            }
            return null;
        })
        .filter(c => c !== null);
}

// Sort collections and their tours
function sortCollections(collections, sortBy) {
    let sorted = JSON.parse(JSON.stringify(collections)); // Deep copy

    switch(sortBy) {
        case 'name':
            // Sort tours within each collection alphabetically
            sorted.forEach(collection => {
                collection.tours.sort((a, b) => a.title.localeCompare(b.title));
            });
            break;
        case 'nameDesc':
            // Sort tours within each collection reverse alphabetically
            sorted.forEach(collection => {
                collection.tours.sort((a, b) => b.title.localeCompare(a.title));
            });
            break;
        default:
            // Keep default order (by kiosk number)
            break;
    }

    return sorted;
}

// Count total tours in collections
function countTours(collections) {
    return collections.reduce((total, collection) => total + collection.tours.length, 0);
}

// Update the display based on current filters and sort
function updateDisplay() {
    const searchQuery = document.getElementById('searchInput').value;
    const sortBy = document.getElementById('sortSelect').value;

    let collections = JSON.parse(JSON.stringify(audioToursData)); // Deep copy
    collections = filterCollections(collections, searchQuery);
    collections = sortCollections(collections, sortBy);

    renderKiosks(collections);
    updateStats(countTours(collections), countTours(audioToursData));
}

// Update statistics display
function updateStats(showing, total) {
    let statsDiv = document.querySelector('.stats');
    
    if (!statsDiv) {
        statsDiv = document.createElement('div');
        statsDiv.className = 'stats';
        const main = document.querySelector('main');
        const searchSection = document.querySelector('.search-section');
        main.insertBefore(statsDiv, searchSection.nextSibling);
    }
    
    statsDiv.innerHTML = `
        <div class="stats-count">
            Showing ${showing} of ${total} audio tours
        </div>
    `;
}

// Initialize the application
function init() {
    // Set up event listeners
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const layoutToggle = document.getElementById('layoutToggle');
    const compactToggle = document.getElementById('compactToggle');
    const mainContainer = document.getElementById('mainContainer');
    const toursContainer = document.getElementById('toursContainer');

    searchInput.addEventListener('input', debounce(updateDisplay, 300));
    sortSelect.addEventListener('change', updateDisplay);

    // Handle layout toggle (full width vs constrained)
    layoutToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            mainContainer.classList.remove('constrained-width');
        } else {
            mainContainer.classList.add('constrained-width');
        }
    });

    // Handle compact mode toggle (show only titles)
    compactToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            toursContainer.classList.add('compact');
        } else {
            toursContainer.classList.remove('compact');
        }
    });

    // Initial render
    updateDisplay();

    console.log('Audio Tours Index initialized');
    console.log(`Total collections: ${audioToursData.length}`);
    console.log(`Total tours: ${countTours(audioToursData)}`);
}

// Debounce helper function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Future enhancement: Add geolocation-based features
// This function is prepared for future map integration when location data becomes available
// It will be called from init() once the location field in tours-data.js is populated
// function initializeMap() {
//     // Will display tours on an interactive map based on user's location
//     // Example: Create Leaflet/MapBox map, add markers for each tour with location data
//     console.log('Map feature will be implemented in future version');
// }

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterCollections,
        sortCollections,
        countTours
    };
} else {
    // Run initialization when DOM is ready (browser only)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}
