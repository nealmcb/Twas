// Main Application Logic for Audio Tours Index

let showKeywords = false;

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
            // Normal mode: render each tour with description and keywords
            collection.tours.forEach(tour => {
                const tourDiv = document.createElement('div');
                tourDiv.className = 'tour-item';

                const title = document.createElement('h3');
                title.textContent = tour.title;
                title.onclick = () => handleTitleClick(tour.title);
                tourDiv.appendChild(title);

                const desc = document.createElement('p');
                desc.textContent = tour.description;
                tourDiv.appendChild(desc);

                // Add keywords if available
                if (tour.keywords && tour.keywords.length > 0) {
                    const keywordsDiv = document.createElement('div');
                    keywordsDiv.className = 'tour-keywords' + (showKeywords ? ' visible' : '');

                    const label = document.createElement('strong');
                    label.textContent = 'Keywords: ';
                    keywordsDiv.appendChild(label);

                    tour.keywords.forEach(keyword => {
                        const keywordSpan = document.createElement('span');
                        keywordSpan.className = 'keyword';
                        keywordSpan.textContent = keyword;
                        keywordSpan.onclick = () => handleKeywordClick(keyword);
                        keywordsDiv.appendChild(keywordSpan);
                    });

                    tourDiv.appendChild(keywordsDiv);
                }

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle clicking on a keyword to search by it
function handleKeywordClick(keyword) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = keyword;
    updateDisplay();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter collections based on search query (including keywords)
function filterCollections(collections, query) {
    if (!query) return collections;

    const lowerQuery = query.toLowerCase();

    // Check if query matches any animal keyword variants
    const matchingAnimalKeywords = [];
    for (const [mainKeyword, variants] of Object.entries(animalKeywordMappings)) {
        if (variants.some(v => v.toLowerCase().includes(lowerQuery) || lowerQuery.includes(v.toLowerCase()))) {
            matchingAnimalKeywords.push(mainKeyword);
        }
    }

    return collections
        .map(collection => {
            const matchingTours = collection.tours.filter(tour => {
                // Search in title, description, and collection name
                const titleMatch = tour.title.toLowerCase().includes(lowerQuery);
                const descMatch = tour.description.toLowerCase().includes(lowerQuery);
                const collectionMatch = collection.collectionName.toLowerCase().includes(lowerQuery);

                // Direct keyword match
                const keywordMatch = tour.keywords && tour.keywords.some(k =>
                    k.toLowerCase().includes(lowerQuery) || lowerQuery.includes(k.toLowerCase())
                );

                // Animal variant match (e.g., searching "puma" should find tours with "mountain lion" keyword)
                const animalVariantMatch = tour.keywords && matchingAnimalKeywords.some(mainKeyword =>
                    tour.keywords.includes(mainKeyword)
                );

                return titleMatch || descMatch || collectionMatch || keywordMatch || animalVariantMatch;
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

    if (sortBy === 'name' || sortBy === 'nameDesc') {
        // Flatten all tours, sort them, then regroup by collection
        let allTours = [];
        sorted.forEach(collection => {
            collection.tours.forEach(tour => {
                allTours.push({
                    ...tour,
                    collectionName: collection.collectionName,
                    collectionUrl: collection.tours[0].audioUrl
                });
            });
        });

        // Sort all tours
        if (sortBy === 'name') {
            allTours.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            allTours.sort((a, b) => b.title.localeCompare(a.title));
        }

        // Regroup by collection while maintaining sort order
        const collectionMap = {};
        allTours.forEach(tour => {
            if (!collectionMap[tour.collectionName]) {
                collectionMap[tour.collectionName] = {
                    collectionName: tour.collectionName,
                    tours: []
                };
            }
            collectionMap[tour.collectionName].tours.push(tour);
        });

        sorted = Object.values(collectionMap);
    }

    return sorted;
}

// Count total tours in collections
function countTours(collections) {
    return collections.reduce((total, collection) => total + collection.tours.length, 0);
}

// Comprehensive animal keyword mappings with plurals and common names
const animalKeywordMappings = {
    'tiger': ['tiger', 'tigers', 'bengal tiger', 'bengal tigers', 'siberian tiger', 'siberian tigers', 'amur tiger', 'amur tigers', 'strawberry tiger', 'strawberry tigers', 'golden tabby', 'golden tabbies', 'white tiger', 'white tigers'],
    'lion': ['lion', 'lions', 'african lion', 'african lions', 'asiatic lion', 'asiatic lions'],
    'leopard': ['leopard', 'leopards', 'african leopard', 'african leopards', 'persian leopard', 'persian leopards'],
    'jaguar': ['jaguar', 'jaguars', 'melanistic jaguar', 'melanistic jaguars', 'black jaguar', 'black jaguars'],
    'mountain lion': ['mountain lion', 'mountain lions', 'cougar', 'cougars', 'puma', 'pumas', 'catamount', 'catamounts', 'panther', 'panthers'],
    'serval': ['serval', 'servals'],
    'caracal': ['caracal', 'caracals'],
    'bobcat': ['bobcat', 'bobcats'],
    'lynx': ['lynx', 'lynxes', 'canadian lynx'],
    'bear': ['bear', 'bears', 'grizzly', 'grizzlies', 'grizzly bear', 'grizzly bears', 'black bear', 'black bears', 'brown bear', 'brown bears', 'syrian brown bear', 'syrian brown bears', 'asiatic black bear', 'asiatic black bears'],
    'wolf': ['wolf', 'wolves', 'gray wolf', 'gray wolves', 'grey wolf', 'grey wolves', 'timber wolf', 'timber wolves', 'arctic wolf', 'arctic wolves', 'mexican wolf', 'mexican wolves'],
    'fox': ['fox', 'foxes', 'red fox', 'red foxes', 'arctic fox', 'arctic foxes', 'silver fox', 'silver foxes'],
    'coyote': ['coyote', 'coyotes'],
    'dingo': ['dingo', 'dingoes', 'dingos'],
    'chimpanzee': ['chimpanzee', 'chimpanzees', 'chimp', 'chimps'],
    'hybrid': ['hybrid', 'hybrids', 'liger', 'ligers', 'tigon', 'tigons', 'coywolf', 'coywolves', 'wolf hybrid', 'wolf hybrids', 'wolf-dog', 'wolf-dogs', 'wolfdog', 'wolfdogs'],
    'farm animal': ['cow', 'cows', 'bull', 'bulls', 'cattle', 'donkey', 'donkeys', 'burro', 'burros', 'water buffalo', 'water buffaloes', 'bison', 'buffalo', 'buffaloes', 'horse', 'horses', 'pony', 'ponies', 'alpaca', 'alpacas', 'llama', 'llamas'],
    'eagle': ['eagle', 'eagles', 'bald eagle', 'bald eagles', 'golden eagle', 'golden eagles'],
    'emu': ['emu', 'emus'],
    'peacock': ['peacock', 'peacocks', 'peafowl'],
    'camel': ['camel', 'camels', 'bactrian camel', 'bactrian camels', 'dromedary', 'dromedaries'],
    'coati': ['coati', 'coatis', 'coatimundi', 'coatimundis'],
};

// Get all unique animal keywords from all tours
function getAllAnimalKeywords() {
    const animalSet = new Set();
    const animalKeywords = Object.keys(animalKeywordMappings);

    audioToursData.forEach(collection => {
        collection.tours.forEach(tour => {
            if (tour.keywords) {
                tour.keywords.forEach(keyword => {
                    if (animalKeywords.includes(keyword)) {
                        animalSet.add(keyword);
                    }
                });
            }
        });
    });

    return Array.from(animalSet).sort();
}

// Show animal index
function showAnimalIndex() {
    const animals = getAllAnimalKeywords();
    const searchInput = document.getElementById('searchInput');
    const container = document.getElementById('toursContainer');

    container.innerHTML = '';

    const indexSection = document.createElement('div');
    indexSection.style.background = 'white';
    indexSection.style.padding = '2rem';
    indexSection.style.borderRadius = '8px';
    indexSection.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';

    const title = document.createElement('h2');
    title.textContent = 'Animal Index';
    title.style.marginBottom = '1rem';
    title.style.color = '#2c5530';
    indexSection.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'Click any animal name to see all tours featuring that animal:';
    description.style.marginBottom = '1rem';
    indexSection.appendChild(description);

    const animalList = document.createElement('div');
    animalList.style.display = 'flex';
    animalList.style.flexWrap = 'wrap';
    animalList.style.gap = '0.75rem';

    animals.forEach(animal => {
        const animalBtn = document.createElement('button');
        // Capitalize each word properly (e.g., "mountain lion" -> "Mountain Lion")
        const displayName = animal.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        animalBtn.textContent = displayName;
        animalBtn.style.padding = '0.6rem 1.2rem';
        animalBtn.style.background = '#4a7c59';
        animalBtn.style.color = 'white';
        animalBtn.style.border = 'none';
        animalBtn.style.borderRadius = '4px';
        animalBtn.style.cursor = 'pointer';
        animalBtn.style.fontSize = '1rem';
        animalBtn.style.fontWeight = '600';
        animalBtn.onclick = () => {
            searchInput.value = animal;
            updateDisplay();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        animalList.appendChild(animalBtn);
    });

    indexSection.appendChild(animalList);
    container.appendChild(indexSection);

    updateStats(animals.length, countTours(audioToursData));
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
    const clearButton = document.getElementById('clearButton');
    const animalIndexBtn = document.getElementById('animalIndexBtn');
    const showKeywordsBtn = document.getElementById('showKeywordsBtn');
    const fullWidthToggle = document.getElementById('fullWidthToggle');
    const gridToggle = document.getElementById('gridToggle');
    const compactToggle = document.getElementById('compactToggle');
    const headerToggle = document.getElementById('headerToggle');
    const mainContainer = document.getElementById('mainContainer');
    const toursContainer = document.getElementById('toursContainer');

    // Search and sort
    searchInput.addEventListener('input', debounce(updateDisplay, 300));
    sortSelect.addEventListener('change', updateDisplay);

    // Clear button
    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        updateDisplay();
    });

    // Animal Index button
    animalIndexBtn.addEventListener('click', showAnimalIndex);

    // Show Keywords button
    showKeywordsBtn.addEventListener('click', () => {
        showKeywords = !showKeywords;
        showKeywordsBtn.textContent = showKeywords ? 'Hide Keywords' : 'Show Keywords';
        updateDisplay();
    });

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
        console.log('Grid toggle changed:', e.target.checked);
        if (e.target.checked) {
            toursContainer.classList.add('grid-layout');
            console.log('Added grid-layout class. Classes:', toursContainer.className);
            console.log('Computed display:', window.getComputedStyle(toursContainer).display);
        } else {
            toursContainer.classList.remove('grid-layout');
            console.log('Removed grid-layout class. Classes:', toursContainer.className);
        }
    });

    // Compact mode toggle
    compactToggle.addEventListener('change', () => {
        console.log('Compact toggle changed:', compactToggle.checked);
        if (compactToggle.checked) {
            toursContainer.classList.add('compact');
        } else {
            toursContainer.classList.remove('compact');
        }
        console.log('Container classes:', toursContainer.className);
        console.log('Computed display:', window.getComputedStyle(toursContainer).display);
        updateDisplay();
    });

    // Header toggle
    headerToggle.addEventListener('click', toggleHeader);

    // Initial render
    updateDisplay();

    console.log('Audio Tours Index initialized');
    console.log(`Total collections: ${audioToursData.length}`);
    console.log(`Total tours: ${countTours(audioToursData)}`);
    console.log('Tours container element:', toursContainer);
    console.log('Initial classes:', toursContainer.className);
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
