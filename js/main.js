// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 2000);
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
    });
});

// Theme Toggle
function toggleTheme(theme) {
    document.body.className = theme + '-mode';
    localStorage.setItem('theme', theme);
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    toggleTheme(savedTheme);
});

// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        setTimeout(() => {
            section.classList.add('active');
        }, 10);
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate corresponding nav link
    const activeLink = document.querySelector(`.nav-menu a[onclick*="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Floor Plan Tabs
function showFloor(floorId) {
    // Remove active class from all floor tabs
    document.querySelectorAll('.floor-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all floors
    document.querySelectorAll('.floor').forEach(floor => {
        floor.classList.remove('active');
        floor.style.display = 'none';
    });
    
    // Add active class to clicked tab
    const tab = document.querySelector(`.floor-tab[onclick*="${floorId}"]`);
    if (tab) tab.classList.add('active');
    
    // Show corresponding floor
    const floor = document.getElementById(`${floorId}-floor`);
    if (floor) {
        floor.style.display = 'block';
        setTimeout(() => {
            floor.classList.add('active');
        }, 10);
    }
}

// Scientist Data with proper images
const scientistsData = {
    chemistry: [
        {
            name: "Acharya Prafulla Chandra Ray",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%B0%E0%A6%BF%E0%A6%A4_%28%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%9A%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0_%E0%A6%B0%E0%A6%BE%E0%A6%AF%E0%A6%BC%29_005.tif/lossy-page1-250px-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%B0%E0%A6%BF%E0%A6%A4_%28%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%9A%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0_%E0%A6%B0%E0%A6%BE%E0%A6%AF%E0%A6%BC%29_005.tif.jpg",
            wiki: "https://en.wikipedia.org/wiki/Prafulla_Chandra_Ray",
            description: "Father of Indian chemistry, founder of Bengal Chemicals"
        },
        {
            name: "Marie Curie",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg",
            wiki: "https://en.wikipedia.org/wiki/Marie_Curie",
            description: "Pioneer in radioactivity, discovered polonium and radium"
        },
        {
            name: "Dmitri Mendeleev",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%EB%93%9C%EB%AF%B8%ED%8A%B8%EB%A6%AC_%EB%A9%98%EB%8D%B8%EB%A0%88%EC%98%88%ED%94%84.jpg/960px-%EB%93%9C%EB%AF%B8%ED%8A%B8%EB%A6%AC_%EB%A9%98%EB%8D%B8%EB%A0%88%EC%98%88%ED%94%84.jpg",
            wiki: "https://en.wikipedia.org/wiki/Dmitri_Mendeleev",
            description: "Created the periodic table of elements"
        },
        {
            name: "Robert Boyle",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg/960px-The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg",
            wiki: "https://en.wikipedia.org/wiki/Robert_Boyle",
            description: "First modern chemist, Boyle's law"
        },
        {
            name: "John Dalton",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/John_Dalton_by_Thomas_Phillips%2C_1835.jpg/220px-John_Dalton_by_Thomas_Phillips%2C_1835.jpg",
            wiki: "https://en.wikipedia.org/wiki/John_Dalton",
            description: "Atomic theory pioneer"
        }
    ],
    
    physics: [
        {
            name: "C. V. Raman",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sir_CV_Raman.JPG/250px-Sir_CV_Raman.JPG",
            wiki: "https://en.wikipedia.org/wiki/C._V._Raman",
            description: "Nobel laureate, discovered Raman Effect"
        },
        {
            name: "Albert Einstein",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
            wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",
            description: "Theory of relativity"
        },
        {
            name: "Isaac Newton",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg",
            wiki: "https://en.wikipedia.org/wiki/Isaac_Newton",
            description: "Laws of motion and gravity"
        },
        {
            name: "Galileo Galilei",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff/lossy-page1-250px-Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff.jpg",
            wiki: "https://en.wikipedia.org/wiki/Galileo_Galilei",
            description: "Father of modern science"
        },
        {
            name: "Stephen Hawking",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/220px-Stephen_Hawking.StarChild.jpg",
            wiki: "https://en.wikipedia.org/wiki/Stephen_Hawking",
            description: "Black holes and cosmology"
        }
    ],
    
    biology: [
        {
            name: "Jagadish Chandra Bose",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/J.C.Bose.JPG/250px-J.C.Bose.JPG",
            wiki: "https://en.wikipedia.org/wiki/Jagadish_Chandra_Bose",
            description: "Father of radio science, plant physiology pioneer"
        },
        {
            name: "Charles Darwin",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg",
            wiki: "https://en.wikipedia.org/wiki/Charles_Darwin",
            description: "Theory of evolution"
        },
        {
            name: "Gregor Mendel",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Gregor_Mendel_2.jpg/220px-Gregor_Mendel_2.jpg",
            wiki: "https://en.wikipedia.org/wiki/Gregor_Mendel",
            description: "Father of genetics"
        },
        {
            name: "Louis Pasteur",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg/250px-Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg",
            wiki: "https://en.wikipedia.org/wiki/Louis_Pasteur",
            description: "Germ theory, pasteurization"
        },
        {
            name: "Jane Goodall",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Deputy_Secretary_Higginbottom_Poses_for_a_Photo_With_Dr._Jane_Goodall_and_the_State_Department%27s_Global_Health_Diplomacy_Director_Jordan_in_Washington_%2822365513310%29_%282%29_%28cropped_2%29.jpg/250px-thumbnail.jpg",
            wiki: "https://en.wikipedia.org/wiki/Jane_Goodall",
            description: "Chimpanzee research pioneer"
        }
    ],
    
    mathematics: [
        {
            name: "Aryabhata",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aryabhatta_of_Bihar.jpg/220px-Aryabhatta_of_Bihar.jpg",
            wiki: "https://en.wikipedia.org/wiki/Aryabhata",
            description: "Ancient Indian mathematician and astronomer"
        },
        {
            name: "Srinivasa Ramanujan",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Srinivasa_Ramanujan_-_OPC_-_1.jpg/220px-Srinivasa_Ramanujan_-_OPC_-_1.jpg",
            wiki: "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan",
            description: "Mathematical genius"
        },
        {
            name: "Euclid",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg/250px-Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Euclid",
            description: "Father of geometry"
        },
        {
            name: "Pythagoras",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg/250px-Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Pythagoras",
            description: "Pythagorean theorem"
        },
        {
            name: "Bhaskara II",
            photo: "https://i.pinimg.com/736x/31/a1/73/31a173a4f3a237686476ec274e020ab4.jpg",
            wiki: "https://en.wikipedia.org/wiki/Bhaskara_II",
            description: "12th-century Indian mathematician"
        }
    ],
    
    'computer-science': [
        {
            name: "Bill Gates",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Bill_Gates",
            description: "Co-founder of Microsoft"
        },
        {
            name: "Steve Jobs",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/220px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Steve_Jobs",
            description: "Co-founder of Apple"
        },
        {
            name: "Vijay Bhatkar",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Vijay_Bhatkar_Portrait_Photo.jpg/250px-Vijay_Bhatkar_Portrait_Photo.jpg",
            wiki: "https://en.wikipedia.org/wiki/Vijay_Bhatkar",
            description: "Architect of India's PARAM supercomputers"
        },
        {
            name: "Alan Turing",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg",
            wiki: "https://en.wikipedia.org/wiki/Alan_Turing",
            description: "Father of theoretical computer science"
        },
        {
            name: "Tim Berners-Lee",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
            description: "Inventor of the World Wide Web"
        }
    ],
    
    'social-science': [
        {
            name: "Mahatma Gandhi",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
            wiki: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
            description: "Leader of Indian independence movement"
        },
        {
            name: "Jawaharlal Nehru",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Jawaharlal_Nehru%2C_1947.jpg/220px-Jawaharlal_Nehru%2C_1947.jpg",
            wiki: "https://en.wikipedia.org/wiki/Jawaharlal_Nehru",
            description: "First Prime Minister of India"
        },
        {
            name: "B. R. Ambedkar",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Dr._Bhimrao_Ambedkar.jpg/220px-Dr._Bhimrao_Ambedkar.jpg",
            wiki: "https://en.wikipedia.org/wiki/B._R._Ambedkar",
            description: "Architect of the Indian Constitution"
        },
        {
            name: "Subhas Chandra Bose",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/220px-Subhas_Chandra_Bose_NRB.jpg",
            wiki: "https://en.wikipedia.org/wiki/Subhas_Chandra_Bose",
            description: "Indian nationalist leader"
        },
        {
            name: "Rani Lakshmibai",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Rani_of_jhansi.jpg/220px-Rani_of_jhansi.jpg",
            wiki: "https://en.wikipedia.org/wiki/Rani_of_Jhansi",
            description: "Queen of Jhansi, freedom fighter"
        }
    ],
    
    stem: [
        {
            name: "N. R. Narayana Murthy",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Narayana_Murthy_CIF_%28cropped%29.JPG/250px-Narayana_Murthy_CIF_%28cropped%29.JPG",
            wiki: "https://en.wikipedia.org/wiki/N._R._Narayana_Murthy",
            description: "Co-founder of Infosys"
        },
        {
            name: "Elon Musk",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Elon_Musk",
            description: "CEO of SpaceX and Tesla"
        },
        {
            name: "Sundar Pichai",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/220px-Sundar_Pichai_%282023%29_cropped.jpg",
            wiki: "https://en.wikipedia.org/wiki/Sundar_Pichai",
            description: "CEO of Google and Alphabet"
        },
        {
            name: "Satya Nadella",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/250px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Satya_Nadella",
            description: "CEO of Microsoft"
        },
        {
            name: "Grace Hopper",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/220px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Grace_Hopper",
            description: "Computer programming pioneer"
        }
    ]
};

// Subject Titles
const subjectTitles = {
    chemistry: "Chemistry Laboratory - Acharya Prafulla Chandra Lab",
    physics: "Physics Laboratory - Chandrashekhar Venkata Raman Lab",
    biology: "Biology Laboratory - Jagdishchandra Bose Lab",
    mathematics: "Mathematics Laboratory",
    'social-science': "Social Science Laboratory",
    'computer-science': "Computer Science Laboratories",
    stem: "STEM Laboratory - Narayanmurthy Lab"
};

// Current subject tracking
let currentSubject = '';
let previousSection = 'labs';

// Open Subject
function openSubject(subject) {
    currentSubject = subject;
    previousSection = document.querySelector('.section.active').id;
    
    // Update title
    const title = document.getElementById('subject-title');
    const subtitle = document.getElementById('subject-subtitle');
    if (title) title.textContent = subjectTitles[subject] || 'Laboratory';
    if (subtitle) subtitle.textContent = 'Grades 1-10';
    
    // Load scientists
    loadScientists(subject);
    
    // Show subject detail section
    showSection('subject-detail');
}

// Load Scientists
function loadScientists(subject) {
    const scientists = scientistsData[subject] || [];
    const scientistsGrid = document.getElementById('scientists-grid');
    const scientistsTitle = document.getElementById('scientists-title');
    
    if (!scientistsGrid) return;
    
    // Clear previous content
    scientistsGrid.innerHTML = '';
    
    // Add scientists
    scientists.forEach(scientist => {
        const scientistCard = document.createElement('div');
        scientistCard.className = 'scientist-card';
        
        scientistCard.innerHTML = `
            <div class="scientist-image" onclick="openWikipedia('${scientist.wiki}')">
                <img src="${scientist.photo}" alt="${scientist.name}" loading="lazy">
            </div>
            <div class="scientist-content">
                <h4>${scientist.name}</h4>
                <div class="wiki-link" onclick="openWikipedia('${scientist.wiki}')">
                    <i class="fab fa-wikipedia-w"></i>
                    <span>Learn More on Wikipedia</span>
                </div>
            </div>
        `;
        
        scientistsGrid.appendChild(scientistCard);
    });
    
    // Update scientists title
    if (scientistsTitle) {
        scientistsTitle.textContent = `Famous Scientists`;
    }
}

// Go Back to Labs
function goBackToLabs() {
    showSection(previousSection);
    currentSubject = '';
}

// Open Wikipedia
function openWikipedia(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Room Hover Info Data
const roomHoverData = {
    'chemistry': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%B0%E0%A6%BF%E0%A6%A4_%28%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%9A%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0_%E0%A6%B0%E0%A6%BE%E0%A6%AF%E0%A6%BC%29_005.tif/lossy-page1-250px-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%B0%E0%A6%BF%E0%A6%A4_%28%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%9A%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0_%E0%A6%B0%E0%A6%BE%E0%A6%AF%E0%A6%BC%29_005.tif.jpg",
        name: "Acharya Prafulla Chandra Ray",
        lab: "Chemistry Lab"
    },
    'physics': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sir_CV_Raman.JPG/250px-Sir_CV_Raman.JPG",
        name: "C. V. Raman",
        lab: "Physics Lab"
    },
    'biology': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/J.C.Bose.JPG/250px-J.C.Bose.JPG",
        name: "Jagadish Chandra Bose",
        lab: "Biology Lab"
    },
    'mathematics': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aryabhatta_of_Bihar.jpg/220px-Aryabhatta_of_Bihar.jpg",
        name: "Aryabhata",
        lab: "Math Lab"
    },
    'social-science': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
        name: "Mahatma Gandhi",
        lab: "Social Science Lab"
    },
    'computer-gates': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg",
        name: "Bill Gates",
        lab: "Computer Lab"
    },
    'computer-jobs': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/220px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
        name: "Steve Jobs",
        lab: "Computer Lab"
    },
    'computer-bhatkar': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Vijay_Bhatkar_Portrait_Photo.jpg/250px-Vijay_Bhatkar_Portrait_Photo.jpg",
        name: "Vijay Bhatkar",
        lab: "Computer Lab"
    },
    'stem': {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Narayana_Murthy_CIF_%28cropped%29.JPG/250px-Narayana_Murthy_CIF_%28cropped%29.JPG",
        name: "N. R. Narayana Murthy",
        lab: "STEM Lab"
    }
};

// Show Room Info on Hover
// Show Room Info on Hover
function showRoomInfo(floorId, roomType) {
    const tooltip = document.getElementById(`${floorId}-tooltip`);
    const data = roomHoverData[roomType];
    
    if (tooltip && data) {
        // Get floor prefix (ground, first, second, third)
        const floorPrefix = floorId.split('-')[0];
        
        // Update tooltip content
        const photoElement = document.getElementById(`${floorPrefix}-scientist-photo`);
        const nameElement = document.getElementById(`${floorPrefix}-scientist-name`);
        const labElement = document.getElementById(`${floorPrefix}-lab-name`);
        
        if (photoElement) photoElement.src = data.photo;
        if (nameElement) nameElement.textContent = data.name;
        if (labElement) labElement.textContent = data.lab;
        
        // Position tooltip relative to the hovered room
        const room = event.target.closest('.room');
        if (room) {
            // Get room position relative to its parent (.building)
            const roomRect = room.getBoundingClientRect();
            const buildingRect = room.parentElement.getBoundingClientRect();
            const floorRect = document.querySelector(`#${floorId} .floor-visual`).getBoundingClientRect();
            
            // Calculate relative position within the floor visual container
            const roomLeft = roomRect.left - buildingRect.left;
            const roomTop = roomRect.top - buildingRect.top;
            
            // Position tooltip above the room
            const tooltipHeight = 140; // Approximate tooltip height
            
            // Center the tooltip above the room
            tooltip.style.top = `${roomTop - tooltipHeight - 10}px`;
            tooltip.style.left = `${roomLeft + (roomRect.width / 2) - 90}px`; // 90 = half of tooltip width (180/2)
            
            // Make sure tooltip stays within floor visual bounds
            const tooltipRect = {
                left: roomLeft + (roomRect.width / 2) - 90,
                top: roomTop - tooltipHeight - 10,
                right: roomLeft + (roomRect.width / 2) + 90,
                bottom: roomTop - 10
            };
            
            // Adjust if tooltip goes outside left/right bounds
            if (tooltipRect.left < 10) {
                tooltip.style.left = '10px';
            } else if (tooltipRect.right > buildingRect.width - 10) {
                tooltip.style.left = `${buildingRect.width - 190}px`;
            }
        }
        
        // Show tooltip
        tooltip.classList.add('active');
    }
}

// Hide Room Info
function hideRoomInfo(floorId) {
    const tooltip = document.getElementById(`${floorId}-tooltip`);
    if (tooltip) {
        tooltip.classList.remove('active');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Make sure home section is active on load
    showSection('home');
    
    // Add click handlers to preview cards
    document.querySelectorAll('.preview-card').forEach(card => {
        card.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/openSubject\('([^']+)'\)/);
                if (match) {
                    openSubject(match[1]);
                }
            }
        });
    });
    
    // Add click handlers for room items
    document.querySelectorAll('.room').forEach(room => {
        room.addEventListener('click', function() {
            const lab = this.dataset.lab;
            if (lab) {
                const labMap = {
                    'chemistry': 'chemistry',
                    'physics': 'physics',
                    'biology': 'biology',
                    'math': 'mathematics',
                    'stem': 'stem',
                    'sst': 'social-science',
                    'computer': 'computer-science'
                };
                
                const subject = labMap[lab];
                if (subject && subject !== 'library' && subject !== 'av' && subject !== 'av3') {
                    openSubject(subject);
                }
            }
        });
    });
    
    // Preload images
    setTimeout(() => {
        Object.values(scientistsData).forEach(subject => {
            subject.forEach(scientist => {
                if (scientist.photo) {
                    const img = new Image();
                    img.src = scientist.photo;
                }
            });
        });
    }, 1000);
});