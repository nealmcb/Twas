// Audio Tours Data Structure
// This data provides a comprehensive tour of the Wild Animal Sanctuary
// Each collection contains multiple individual audio tours with transcripts
// Total: 19 collections with ~76 individual tours

const audioToursData = [
    {
        collectionName: "Main Refuge Tour",
        tours: [
            {
                id: 1,
                title: "Welcome to the Refuge",
                description: "Introduction to the Wild Animal Sanctuary and its mission to rescue and provide lifetime homes for captive wild animals",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/refuge-welcome.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/refuge-welcome.txt",
                location: null
            },
            {
                id: 2,
                title: "History of the Sanctuary",
                description: "Learn about how the sanctuary was founded in 1980 and has grown to become one of the largest carnivore sanctuaries in the world",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/sanctuary-history.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/sanctuary-history.txt",
                location: null
            },
            {
                id: 3,
                title: "The Mile Into The Wild Walkway",
                description: "Explore our elevated walkway that provides unique overhead views of the habitats below",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/walkway.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/walkway.txt",
                location: null
            },
            {
                id: 4,
                title: "Natural Habitat Design",
                description: "Understand how we design large acreage habitats that allow animals to express natural behaviors",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/habitat-design.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/habitat-design.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Big Cat Habitats",
        tours: [
            {
                id: 5,
                title: "Big Cat Rescue Stories",
                description: "Meet rescued big cats from circuses, roadside zoos, and the exotic pet trade",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/big-cats.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/big-cats.txt",
                location: null
            },
            {
                id: 6,
                title: "Big Cat Behavior and Social Structure",
                description: "Learn about natural big cat behaviors and how they interact in sanctuary settings",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/big-cat-behavior.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/big-cat-behavior.txt",
                location: null
            },
            {
                id: 7,
                title: "Conservation and Education",
                description: "Discover how sanctuaries play a role in conservation and public education about captive wildlife",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/conservation-education.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/conservation-education.txt",
                location: null
            },
            {
                id: 8,
                title: "Big Cat Feeding and Care",
                description: "Learn about the daily care, nutrition, and veterinary support provided to our big cats",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/big-cat-care.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/big-cat-care.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Bear Territory",
        tours: [
            {
                id: 9,
                title: "Black Bears",
                description: "Meet our black bear residents rescued from roadside attractions and their rehabilitation journey",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/black-bears.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/black-bears.txt",
                location: null
            },
            {
                id: 10,
                title: "Grizzly Bears",
                description: "Discover the story of our grizzly bear rescues from entertainment facilities and private ownership",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/grizzly-bears.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/grizzly-bears.txt",
                location: null
            },
            {
                id: 11,
                title: "Bear Hibernation and Seasonal Behavior",
                description: "Understand how bears at the sanctuary experience natural seasonal changes and denning behaviors",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bear-hibernation.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bear-hibernation.txt",
                location: null
            },
            {
                id: 12,
                title: "Bear Enrichment Activities",
                description: "Learn about the enrichment programs that keep bears physically and mentally stimulated",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bear-enrichment.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bear-enrichment.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Wolf & Coyote Area",
        tours: [
            {
                id: 13,
                title: "Wolf Pack",
                description: "Understanding wolf behavior, pack dynamics, and the importance of family groups",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/wolf-pack.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/wolf-pack.txt",
                location: null
            },
            {
                id: 14,
                title: "Coyote Families",
                description: "Discover the adaptable coyote and the challenges they face from the exotic pet trade",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/coyotes.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/coyotes.txt",
                location: null
            },
            {
                id: 15,
                title: "Wolf Communication",
                description: "Learn about howling, body language, and other forms of wolf communication",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/wolf-communication.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/wolf-communication.txt",
                location: null
            },
            {
                id: 16,
                title: "Wolf-Dog Hybrids",
                description: "Understanding the challenges of wolf-dog hybrids and why they don't make good pets",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/wolf-hybrids.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/wolf-hybrids.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Tiger Habitat",
        tours: [
            {
                id: 17,
                title: "Bengal Tigers",
                description: "Stories of rescued Bengal tigers from private owners and entertainment facilities",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bengal-tigers.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bengal-tigers.txt",
                location: null
            },
            {
                id: 18,
                title: "Siberian Tigers",
                description: "Meet our Siberian tigers and learn about their unique adaptations to cold climates",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/siberian-tigers.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/siberian-tigers.txt",
                location: null
            },
            {
                id: 19,
                title: "Tiger Conservation Crisis",
                description: "Learn about the crisis facing wild tigers and the captive tiger problem in America",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/tiger-crisis.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/tiger-crisis.txt",
                location: null
            },
            {
                id: 20,
                title: "Tiger Play and Interaction",
                description: "Observe natural tiger behaviors including play, swimming, and territorial displays",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/tiger-behavior.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/tiger-behavior.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Lion Pride",
        tours: [
            {
                id: 21,
                title: "African Lions",
                description: "The journey of our African lion pride rescued from circuses and private facilities",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/african-lions.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/african-lions.txt",
                location: null
            },
            {
                id: 22,
                title: "Lion Pride Structure",
                description: "Understand the complex social structure of lion prides and family bonds",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/lion-pride.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/lion-pride.txt",
                location: null
            },
            {
                id: 23,
                title: "Circus Lion Rescues",
                description: "Heartbreaking and uplifting stories of lions rescued from traveling circuses",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/circus-lions.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/circus-lions.txt",
                location: null
            },
            {
                id: 24,
                title: "Lion Health and Veterinary Care",
                description: "Learn about the specialized veterinary care provided to our aging lion residents",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/lion-care.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/lion-care.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Mountain Lion Area",
        tours: [
            {
                id: 25,
                title: "Mountain Lion Habitat",
                description: "Discover the natural habitat of mountain lions and their solitary nature",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/mountain-lions.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/mountain-lions.txt",
                location: null
            },
            {
                id: 26,
                title: "Mountain Lion Hunting Behavior",
                description: "Learn about the hunting strategies and prey preferences of these apex predators",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/mountain-lion-hunting.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/mountain-lion-hunting.txt",
                location: null
            },
            {
                id: 27,
                title: "Mountain Lions as Pets",
                description: "Why mountain lions don't make good pets and the dangers of private ownership",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/mountain-lion-pets.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/mountain-lion-pets.txt",
                location: null
            },
            {
                id: 28,
                title: "Mountain Lion Territory",
                description: "Understanding territorial behavior and space requirements for these wide-ranging cats",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/mountain-lion-territory.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/mountain-lion-territory.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Leopard Territory",
        tours: [
            {
                id: 29,
                title: "Leopard Conservation",
                description: "The story of our leopard rescues and their role in education about captive breeding",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/leopards.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/leopards.txt",
                location: null
            },
            {
                id: 30,
                title: "African Leopards",
                description: "Meet our African leopards and learn about their natural behavior and adaptations",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/african-leopards.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/african-leopards.txt",
                location: null
            },
            {
                id: 31,
                title: "Snow Leopards",
                description: "Discover our snow leopards rescued from private collections and their mountain adaptations",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/snow-leopards.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/snow-leopards.txt",
                location: null
            },
            {
                id: 32,
                title: "Leopard Climbing and Tree Use",
                description: "Learn about leopards' incredible climbing abilities and arboreal lifestyle",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/leopard-climbing.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/leopard-climbing.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Jaguar Habitat",
        tours: [
            {
                id: 33,
                title: "Jaguar Recovery",
                description: "Understanding jaguar rehabilitation and the challenges of reintroducing captive-bred jaguars",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/jaguars.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/jaguars.txt",
                location: null
            },
            {
                id: 34,
                title: "Jaguars and Water",
                description: "Discover why jaguars love water and their unique swimming abilities among big cats",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/jaguar-swimming.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/jaguar-swimming.txt",
                location: null
            },
            {
                id: 35,
                title: "Black Jaguars",
                description: "Learn about melanistic jaguars (black panthers) and the genetics behind their coloring",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/black-jaguars.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/black-jaguars.txt",
                location: null
            },
            {
                id: 36,
                title: "Jaguar Conservation in the Wild",
                description: "Understanding the threats facing wild jaguars in Central and South America",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/jaguar-conservation.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/jaguar-conservation.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Cougar Sanctuary",
        tours: [
            {
                id: 37,
                title: "Cougar Family",
                description: "Meet the cougar pride at the sanctuary and their rescue from pet situations",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/cougars.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/cougars.txt",
                location: null
            },
            {
                id: 38,
                title: "Cougar Kittens",
                description: "Learn about cougar reproduction and the challenges of raising cubs born in captivity",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/cougar-kittens.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/cougar-kittens.txt",
                location: null
            },
            {
                id: 39,
                title: "Cougar Vocalizations",
                description: "Discover the unique sounds cougars make, from purrs to screams",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/cougar-sounds.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/cougar-sounds.txt",
                location: null
            },
            {
                id: 40,
                title: "Cougar-Human Conflicts",
                description: "Understanding why cougars end up in captivity and human-wildlife coexistence",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/cougar-conflicts.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/cougar-conflicts.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Bobcat Refuge",
        tours: [
            {
                id: 41,
                title: "Bobcat Stories",
                description: "Meet our rescued bobcats and their journey from pet trade to sanctuary",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bobcats.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bobcats.txt",
                location: null
            },
            {
                id: 42,
                title: "Bobcat Adaptability",
                description: "Learn about the bobcat's remarkable adaptability to various habitats across North America",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bobcat-adaptability.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bobcat-adaptability.txt",
                location: null
            },
            {
                id: 43,
                title: "Bobcat Hunting Techniques",
                description: "Discover the hunting strategies of these skilled predators",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bobcat-hunting.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bobcat-hunting.txt",
                location: null
            },
            {
                id: 44,
                title: "Bobcats vs Lynx",
                description: "Understanding the differences between bobcats and their lynx relatives",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/bobcat-lynx.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/bobcat-lynx.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Fox Den",
        tours: [
            {
                id: 45,
                title: "Red Foxes",
                description: "Learn about our red fox residents and the exotic pet trade",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/red-foxes.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/red-foxes.txt",
                location: null
            },
            {
                id: 46,
                title: "Arctic Foxes",
                description: "Meet our Arctic foxes and learn about their remarkable cold-weather adaptations",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/arctic-foxes.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/arctic-foxes.txt",
                location: null
            },
            {
                id: 47,
                title: "Fox Behavior and Intelligence",
                description: "Discover the clever and playful nature of foxes and their problem-solving abilities",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/fox-intelligence.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/fox-intelligence.txt",
                location: null
            },
            {
                id: 48,
                title: "Fox Domestication Myths",
                description: "Understanding why foxes don't make good pets despite their dog-like appearance",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/fox-domestication.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/fox-domestication.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Serval and Caracal",
        tours: [
            {
                id: 49,
                title: "Servals",
                description: "Explore the world of servals, their incredible jumping ability, and the dangers of keeping them as pets",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/servals.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/servals.txt",
                location: null
            },
            {
                id: 50,
                title: "Caracals",
                description: "Meet our caracals and learn about their distinctive ear tufts and acrobatic hunting style",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/caracals.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/caracals.txt",
                location: null
            },
            {
                id: 51,
                title: "African Wildcat Ecology",
                description: "Understanding the natural habitats and behaviors of African small cats",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/wildcat-ecology.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/wildcat-ecology.txt",
                location: null
            },
            {
                id: 52,
                title: "Exotic Cat Pet Trade",
                description: "The dark side of the exotic cat trade and why these animals suffer as pets",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/exotic-pet-trade.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/exotic-pet-trade.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Hybrid Cats",
        tours: [
            {
                id: 53,
                title: "Ligers",
                description: "Understanding ligers (lion-tiger hybrids) and the ethics of creating hybrid animals",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/ligers.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/ligers.txt",
                location: null
            },
            {
                id: 54,
                title: "Tigons",
                description: "Learn about tigons (tiger-lion hybrids) and the differences from ligers",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/tigons.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/tigons.txt",
                location: null
            },
            {
                id: 55,
                title: "Health Issues in Hybrid Cats",
                description: "Discover the serious health problems that hybrid big cats face",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/hybrid-health.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/hybrid-health.txt",
                location: null
            },
            {
                id: 56,
                title: "The Problem with Breeding Hybrids",
                description: "Why breeding hybrid cats is harmful and contributes to the captive wildlife crisis",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/hybrid-breeding.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/hybrid-breeding.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Primate Sanctuary",
        tours: [
            {
                id: 57,
                title: "Chimpanzees",
                description: "Meet our chimpanzee family rescued from entertainment and research facilities",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/chimpanzees.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/chimpanzees.txt",
                location: null
            },
            {
                id: 58,
                title: "Chimpanzee Intelligence",
                description: "Learn about the remarkable cognitive abilities and tool use of chimpanzees",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/chimp-intelligence.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/chimp-intelligence.txt",
                location: null
            },
            {
                id: 59,
                title: "Primate Social Bonds",
                description: "Understanding the complex social relationships and emotional lives of primates",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/primate-social.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/primate-social.txt",
                location: null
            },
            {
                id: 60,
                title: "Primates in Entertainment",
                description: "The cruel reality of using primates in movies, TV shows, and advertisements",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/primates-entertainment.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/primates-entertainment.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Exotic Animals",
        tours: [
            {
                id: 61,
                title: "Exotic Animal Diversity",
                description: "Exploring the variety of rescued exotic animals at the sanctuary",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/exotic-diversity.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/exotic-diversity.txt",
                location: null
            },
            {
                id: 62,
                title: "Exotic Hoofstock",
                description: "Meet our rescued exotic hoofed animals from private collections",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/hoofstock.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/hoofstock.txt",
                location: null
            },
            {
                id: 63,
                title: "Exotic Birds",
                description: "Learn about our exotic bird residents and the illegal bird trade",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/exotic-birds.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/exotic-birds.txt",
                location: null
            },
            {
                id: 64,
                title: "Exotic Reptiles",
                description: "Discover our rescued reptiles including large constrictors and venomous species",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/exotic-reptiles.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/exotic-reptiles.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Conservation Efforts",
        tours: [
            {
                id: 65,
                title: "Our Mission",
                description: "Learn about wildlife conservation, rescue operations, and our vision for the future",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/conservation.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/conservation.txt",
                location: null
            },
            {
                id: 66,
                title: "Rescue and Transport",
                description: "The challenging process of rescuing and safely transporting large carnivores",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/rescue-transport.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/rescue-transport.txt",
                location: null
            },
            {
                id: 67,
                title: "Legislative Advocacy",
                description: "How the sanctuary works to change laws protecting captive wildlife",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/advocacy.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/advocacy.txt",
                location: null
            },
            {
                id: 68,
                title: "Educational Outreach",
                description: "Our programs to educate the public about captive wildlife issues",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/education.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/education.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Visitor Center Experience",
        tours: [
            {
                id: 69,
                title: "Welcome and Orientation",
                description: "Start your journey at the visitor center and learn how to make the most of your visit",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/visitor-center.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/visitor-center.txt",
                location: null
            },
            {
                id: 70,
                title: "Viewing Guidelines",
                description: "Important guidelines for respectfully observing rescued wildlife",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/viewing-guidelines.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/viewing-guidelines.txt",
                location: null
            },
            {
                id: 71,
                title: "Gift Shop and Donations",
                description: "Supporting the sanctuary through donations and purchases",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/support.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/support.txt",
                location: null
            },
            {
                id: 72,
                title: "Volunteer and Internship Opportunities",
                description: "Learn about opportunities to get involved with sanctuary operations and animal care",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/volunteer.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/volunteer.txt",
                location: null
            }
        ]
    },

    {
        collectionName: "Sanctuary Expansion",
        tours: [
            {
                id: 73,
                title: "The Refuge Expansion Project",
                description: "Learn about ongoing expansion to accommodate more rescued animals",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/expansion.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/expansion.txt",
                location: null
            },
            {
                id: 74,
                title: "New Habitat Construction",
                description: "Behind the scenes look at how new large-acreage habitats are built",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/construction.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/construction.txt",
                location: null
            },
            {
                id: 75,
                title: "Future Plans",
                description: "The sanctuary's vision for expansion and increased rescue capacity",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/future-plans.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/future-plans.txt",
                location: null
            },
            {
                id: 76,
                title: "Sustainable Sanctuary Operations",
                description: "How the sanctuary operates sustainably to minimize environmental impact",
                audioUrl: "https://www.wildanimalsanctuary.org/audio/sustainability.mp3",
                transcriptUrl: "https://www.wildanimalsanctuary.org/transcripts/sustainability.txt",
                location: null
            }
        ]
    }
];

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioToursData;
}
