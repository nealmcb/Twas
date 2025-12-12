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
    },
    
    {
        collectionName: "Mountain Lion Area",
        tours: [
            {
                id: 11,
                title: "Mountain Lion Habitat",
                description: "Discover the natural habitat of mountain lions",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/mountain-lions.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/mountain-lions.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Bobcat Refuge",
        tours: [
            {
                id: 12,
                title: "Bobcat Stories",
                description: "Meet our rescued bobcats and their journey",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bobcats.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bobcats.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Fox Den",
        tours: [
            {
                id: 13,
                title: "Red and Arctic Foxes",
                description: "Learn about our fox residents",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/foxes.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/foxes.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Serval and Caracal",
        tours: [
            {
                id: 14,
                title: "African Wildcats",
                description: "Explore the world of servals and caracals",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/wildcats.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/wildcats.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Leopard Territory",
        tours: [
            {
                id: 15,
                title: "Leopard Conservation",
                description: "The story of our leopard rescues",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/leopards.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/leopards.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Jaguar Habitat",
        tours: [
            {
                id: 16,
                title: "Jaguar Recovery",
                description: "Understanding jaguar rehabilitation",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/jaguars.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/jaguars.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Cougar Sanctuary",
        tours: [
            {
                id: 17,
                title: "Cougar Family",
                description: "Meet the cougar pride at the sanctuary",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/cougars.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/cougars.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Hybrid Cats",
        tours: [
            {
                id: 18,
                title: "Liger and Tigon Stories",
                description: "Understanding hybrid big cats",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/hybrids.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/hybrids.txt",
                location: null
            }
        ]
    },
    
    {
        collectionName: "Visitor Center Experience",
        tours: [
            {
                id: 19,
                title: "Welcome and Orientation",
                description: "Start your journey at the visitor center",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/visitor-center.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/visitor-center.txt",
                location: null
            },
            {
                id: 20,
                title: "Gift Shop and Donations",
                description: "Supporting the sanctuary through donations",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/support.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/support.txt",
                location: null
            }
        ]
    }
];

// Note: This is a template structure with 17 sample collections.
// The actual data should be extracted from https://www.wildanimalsanctuary.org/audio-tours
// which contains links to approximately 19 collections of audio files and transcripts.
// 
// To populate this with real data:
// 1. Visit the URL and identify all collection links
// 2. For each collection, extract the individual tour information
// 3. Replace the placeholder data above with actual URLs and descriptions
// 4. Add any additional collections to reach the full ~19 collections

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioToursData;
}
