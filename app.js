// Main Application Logic for Audio Tours Index

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Render all kiosks with their tours
function renderKiosks(collections, isCompact) {
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
        const kioskSection = document.createElement('section');
        kioskSection.className = 'kiosk-section';

        // Kiosk header with link
        const header = document.createElement('div');
        header.className = 'kiosk-header';
        const kioskUrl = collection.tours.length > 0 ? collection.tours[0].audioUrl : '#';

        header.innerHTML = `
            <h2>${escapeHtml(collection.collectionName)}</h2>
            <a href="${escapeHtml(kioskUrl)}" class="kiosk-link" target="_blank" rel="noopener noreferrer">
                Official audio & transcripts ➜
            </a>
        `;
        kioskSection.appendChild(header);

        if (isCompact) {
            // Compact mode: render titles inline
            const toursContainer = document.createElement('div');
            toursContainer.className = 'tours-inline';

            collection.tours.forEach(tour => {
                const tourDiv = document.createElement('div');
                tourDiv.className = 'tour-item';
                const title = document.createElement('h3');
                title.textContent = tour.title;
                title.setAttribute('data-tour-title', tour.title);
                title.onclick = () => handleTitleClick(tour.title);
                tourDiv.appendChild(title);
                toursContainer.appendChild(tourDiv);
            });

            kioskSection.appendChild(toursContainer);
        } else {
            // Normal mode: render each tour with description
            collection.tours.forEach(tour => {
                const tourDiv = document.createElement('div');
                tourDiv.className = 'tour-item';
                const title = document.createElement('h3');
                title.textContent = tour.title;
                title.onclick = () => handleTitleClick(tour.title);
                const desc = document.createElement('p');
                desc.textContent = tour.description;
                tourDiv.appendChild(title);
                tourDiv.appendChild(desc);
                kioskSection.appendChild(tourDiv);
            });
        }

        container.appendChild(kioskSection);
    });
}

// Handle clicking on a tour title to filter by that title
function handleTitleClick(title) {
    const searchInput = document.getElementById('searchInput');
    const compactToggle = document.getElementById('compactToggle');

    // Exit compact mode to show full description
    if (compactToggle.checked) {
        compactToggle.checked = false;
        document.getElementById('toursContainer').classList.remove('compact');
    }

    searchInput.value = title;
    updateDisplay();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter collections based on search query
function filterCollections(collections, query) {
    if (!query) return collections;

    const lowerQuery = query.toLowerCase();

    return collections
        .map(collection => {
            const matchingTours = collection.tours.filter(tour => {
                return tour.title.toLowerCase().includes(lowerQuery) ||
                       tour.description.toLowerCase().includes(lowerQuery) ||
                       collection.collectionName.toLowerCase().includes(lowerQuery);
            });

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
    let sorted = JSON.parse(JSON.stringify(collections));

    switch(sortBy) {
        case 'name':
            sorted.forEach(collection => {
                collection.tours.sort((a, b) => a.title.localeCompare(b.title));
            });
            break;
        case 'nameDesc':
            sorted.forEach(collection => {
                collection.tours.sort((a, b) => b.title.localeCompare(a.title));
            });
            break;
        default:
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
    const compactToggle = document.getElementById('compactToggle');
    const isCompact = compactToggle.checked;

    let collections = JSON.parse(JSON.stringify(audioToursData));
    collections = filterCollections(collections, searchQuery);
    collections = sortCollections(collections, sortBy);

    renderKiosks(collections, isCompact);
    updateStats(countTours(collections), countTours(audioToursData));

    // Auto-collapse header when searching or in compact mode
    updateHeaderState(searchQuery, isCompact);
}

// Update statistics display (inline)
function updateStats(showing, total) {
    const statsInline = document.getElementById('statsInline');
    if (statsInline) {
        statsInline.textContent = `${showing} of ${total} tours`;
    }
}

// Update header collapse state
function updateHeaderState(searchQuery, isCompact) {
    const header = document.getElementById('pageHeader');
    const headerDetails = document.getElementById('headerDetails');
    const headerToggle = document.getElementById('headerToggle');

    // Auto-collapse if searching or in compact mode
    if (searchQuery || isCompact) {
        header.classList.add('collapsed');
        headerDetails.classList.add('hidden');
        headerToggle.textContent = '▶';
    }
}

// Toggle header collapse manually
function toggleHeader() {
    const header = document.getElementById('pageHeader');
    const headerDetails = document.getElementById('headerDetails');
    const headerToggle = document.getElementById('headerToggle');

    if (header.classList.contains('collapsed')) {
        header.classList.remove('collapsed');
        headerDetails.classList.remove('hidden');
        headerToggle.textContent = '▼';
    } else {
        header.classList.add('collapsed');
        headerDetails.classList.add('hidden');
        headerToggle.textContent = '▶';
    }
}

// Initialize the application
function init() {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const fullWidthToggle = document.getElementById('fullWidthToggle');
    const gridToggle = document.getElementById('gridToggle');
    const compactToggle = document.getElementById('compactToggle');
    const headerToggle = document.getElementById('headerToggle');
    const mainContainer = document.getElementById('mainContainer');
    const toursContainer = document.getElementById('toursContainer');

    // Search and sort
    searchInput.addEventListener('input', debounce(updateDisplay, 300));
    sortSelect.addEventListener('change', updateDisplay);

    // Full width toggle
    fullWidthToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            mainContainer.classList.remove('constrained');
        } else {
            mainContainer.classList.add('constrained');
        }
    });

    // Grid layout toggle
    gridToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            toursContainer.classList.add('grid-layout');
        } else {
            toursContainer.classList.remove('grid-layout');
        }
    });

    // Compact mode toggle
    compactToggle.addEventListener('change', () => {
        if (compactToggle.checked) {
            toursContainer.classList.add('compact');
        } else {
            toursContainer.classList.remove('compact');
        }
        updateDisplay();
    });

    // Header toggle
    headerToggle.addEventListener('click', toggleHeader);

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

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterCollections,
        sortCollections,
        countTours
    };
} else {
    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}
