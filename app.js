// Main Application Logic for Audio Tours Index

// Flatten the tours data structure for easier searching and display
function flattenToursData() {
    const allTours = [];
    audioToursData.forEach(collection => {
        collection.tours.forEach(tour => {
            allTours.push({
                ...tour,
                collectionName: collection.collectionName
            });
        });
    });
    return allTours;
}

// Render a single tour card
function renderTourCard(tour) {
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.setAttribute('data-tour-id', tour.id);
    
    let locationBadge = '';
    if (tour.location) {
        locationBadge = `<div class="location-badge">Location Available</div>`;
    }
    
    card.innerHTML = `
        <h3>${escapeHtml(tour.title)}</h3>
        <div class="collection-name">${escapeHtml(tour.collectionName)}</div>
        <p class="description">${escapeHtml(tour.description)}</p>
        <div class="links">
            <a href="${escapeHtml(tour.audioUrl)}" class="btn btn-audio" target="_blank" rel="noopener noreferrer">
                Listen to Audio
            </a>
            <a href="${escapeHtml(tour.transcriptUrl)}" class="btn btn-transcript" target="_blank" rel="noopener noreferrer">
                Read Transcript
            </a>
        </div>
        ${locationBadge}
    `;
    
    return card;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Render all tours
function renderTours(tours) {
    const container = document.getElementById('toursContainer');
    const noResults = document.getElementById('noResults');
    
    container.innerHTML = '';
    
    if (tours.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    container.style.display = 'grid';
    noResults.style.display = 'none';
    
    tours.forEach(tour => {
        const card = renderTourCard(tour);
        container.appendChild(card);
    });
}

// Filter tours based on search query
function filterTours(tours, query) {
    if (!query) return tours;
    
    const lowerQuery = query.toLowerCase();
    return tours.filter(tour => {
        return tour.title.toLowerCase().includes(lowerQuery) ||
               tour.description.toLowerCase().includes(lowerQuery) ||
               tour.collectionName.toLowerCase().includes(lowerQuery);
    });
}

// Sort tours
function sortTours(tours, sortBy) {
    const sorted = [...tours];
    
    switch(sortBy) {
        case 'name':
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'nameDesc':
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            // Keep default order
            break;
    }
    
    return sorted;
}

// Update the display based on current filters and sort
function updateDisplay() {
    const searchQuery = document.getElementById('searchInput').value;
    const sortBy = document.getElementById('sortSelect').value;
    
    let tours = flattenToursData();
    tours = filterTours(tours, searchQuery);
    tours = sortTours(tours, sortBy);
    
    renderTours(tours);
    updateStats(tours.length, flattenToursData().length);
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
    
    searchInput.addEventListener('input', debounce(updateDisplay, 300));
    sortSelect.addEventListener('change', updateDisplay);
    
    // Initial render
    updateDisplay();
    
    console.log('Audio Tours Index initialized');
    console.log(`Total collections: ${audioToursData.length}`);
    console.log(`Total tours: ${flattenToursData().length}`);
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
// This function will be used when location data is available
function initializeMap() {
    // Placeholder for future map integration
    // Will display tours on an interactive map based on user's location
    console.log('Map feature will be implemented in future version');
}

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        flattenToursData,
        filterTours,
        sortTours
    };
} else {
    // Run initialization when DOM is ready (browser only)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}
