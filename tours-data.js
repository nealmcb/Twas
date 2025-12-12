// Audio Tours Data Structure
// This data should be populated with actual content from https://www.wildanimalsanctuary.org/audio-tours
// Each collection contains multiple individual audio tours with transcripts

const audioToursData = [
    // Example structure for Tour Collection 1
    {
        collectionName: "Main Refuge Tour",
        tours: [
            {
                id: 1,
                title: "Welcome to the Refuge",
                description: "Introduction to the Wild Animal Sanctuary and its mission",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/refuge-welcome.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/refuge-welcome.txt",
                location: null // Will be added in future: { lat: 40.123, lng: -104.456 }
            },
            {
                id: 2,
                title: "Big Cat Habitats",
                description: "Learn about our rescued big cats and their stories",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/big-cats.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/big-cats.txt",
                location: null
            }
        ]
    },
    
    // Example structure for Tour Collection 2
    {
        collectionName: "Bear Territory",
        tours: [
            {
                id: 3,
                title: "Black Bears",
                description: "Meet our black bear residents and their rehabilitation journey",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/black-bears.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/black-bears.txt",
                location: null
            },
            {
                id: 4,
                title: "Grizzly Bears",
                description: "Discover the story of our grizzly bear rescue",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/grizzly-bears.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/grizzly-bears.txt",
                location: null
            }
        ]
    },
    
    // Example structure for Tour Collection 3
    {
        collectionName: "Wolf & Coyote Area",
        tours: [
            {
                id: 5,
                title: "Wolf Pack",
                description: "Understanding wolf behavior and pack dynamics",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/wolf-pack.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/wolf-pack.txt",
                location: null
            }
        ]
    },
    
    // Placeholder for additional collections (4-19)
    // These should be populated with actual data from the website
    {
        collectionName: "Tiger Habitat",
        tours: [
            {
                id: 6,
                title: "Bengal Tigers",
                description: "Stories of rescued Bengal tigers",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bengal-tigers.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bengal-tigers.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Lion Pride",
        tours: [
            {
                id: 7,
                title: "African Lions",
                description: "The journey of our African lion pride",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/african-lions.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/african-lions.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Primate Sanctuary",
        tours: [
            {
                id: 8,
                title: "Chimpanzees",
                description: "Meet our chimpanzee family",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/chimpanzees.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/chimpanzees.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Exotic Animals",
        tours: [
            {
                id: 9,
                title: "Mixed Habitats",
                description: "Exploring various rescued exotic animals",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/exotic-mix.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/exotic-mix.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Conservation Efforts",
        tours: [
            {
                id: 10,
                title: "Our Mission",
                description: "Learn about wildlife conservation and rescue",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/conservation.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/conservation.txt",
                location: null
            }
        ]
    }
];

// Note: This is a template structure. The actual data should be extracted from
// https://www.wildanimalsanctuary.org/audio-tours which contains links to
// approximately 19 collections of audio files and transcripts.
// 
// To populate this with real data:
// 1. Visit the URL and identify all collection links
// 2. For each collection, extract the individual tour information
// 3. Replace the placeholder data above with actual URLs and descriptions

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioToursData;
}
