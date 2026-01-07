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

// Scientist Data (Fixed with proper image URLs)
const scientistsData = {
    physics: [
        {
            name: "Albert Einstein",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
            wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",
            description: "Theoretical physicist who developed the theory of relativity."
        },
        {
            name: "Isaac Newton",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg",
            wiki: "https://en.wikipedia.org/wiki/Isaac_Newton",
            description: "Mathematician and physicist who formulated the laws of motion and gravity."
        },
        {
            name: "Marie Curie",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg",
            wiki: "https://en.wikipedia.org/wiki/Marie_Curie",
            description: "Physicist and chemist who conducted pioneering research on radioactivity."
        },
        {
            name: "Galileo Galilei",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/220px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
            wiki: "https://en.wikipedia.org/wiki/Galileo_Galilei",
            description: "Astronomer and physicist who played a major role in the Scientific Revolution."
        },
        {
            name: "Stephen Hawking",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/220px-Stephen_Hawking.StarChild.jpg",
            wiki: "https://en.wikipedia.org/wiki/Stephen_Hawking",
            description: "Theoretical physicist known for his work on black holes and cosmology."
        }
    ],
    chemistry: [
        {
            name: "Dmitri Mendeleev",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%EB%93%9C%EB%AF%B8%ED%8A%B8%EB%A6%AC_%EB%A9%98%EB%8D%B8%EB%A0%88%EC%98%88%ED%94%84.jpg/250px-%EB%93%9C%EB%AF%B8%ED%8A%B8%EB%A6%AC_%EB%A9%98%EB%8D%B8%EB%A0%88%EC%98%88%ED%94%84.jpg",
            wiki: "https://en.wikipedia.org/wiki/Dmitri_Mendeleev",
            description: "Created the periodic table of chemical elements."
        },
        {
            name: "Marie Curie",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg",
            wiki: "https://en.wikipedia.org/wiki/Marie_Curie",
            description: "Discovered the elements polonium and radium."
        },
        {
            name: "Antoine Lavoisier",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/David_-_Portrait_of_Monsieur_Lavoisier_%28cropped%292.jpg/250px-David_-_Portrait_of_Monsieur_Lavoisier_%28cropped%292.jpg",
            wiki: "https://en.wikipedia.org/wiki/Antoine_Lavoisier",
            description: "Father of modern chemistry who established the law of conservation of mass."
        },
        {
            name: "Robert Boyle",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg/250px-The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg",
            wiki: "https://en.wikipedia.org/wiki/Robert_Boyle",
            description: "One of the founders of modern chemistry, known for Boyle's law."
        },
        {
            name: "John Dalton",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/John_Dalton_by_Thomas_Phillips%2C_1835.jpg/250px-John_Dalton_by_Thomas_Phillips%2C_1835.jpg",
            wiki: "https://en.wikipedia.org/wiki/John_Dalton",
            description: "Developed the modern atomic theory and researched color blindness."
        }
    ],
    biology: [
        {
            name: "Charles Darwin",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg",
            wiki: "https://en.wikipedia.org/wiki/Charles_Darwin",
            description: "Naturalist known for his contributions to evolutionary biology."
        },
        {
            name: "Gregor Mendel",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Gregor_Mendel_2.jpg/250px-Gregor_Mendel_2.jpg",
            wiki: "https://en.wikipedia.org/wiki/Gregor_Mendel",
            description: "Father of genetics, discovered the fundamental laws of inheritance."
        },
        {
            name: "Louis Pasteur",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg/250px-Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg",
            wiki: "https://en.wikipedia.org/wiki/Louis_Pasteur",
            description: "Microbiologist who developed pasteurization and vaccines."
        },
        {
            name: "Jane Goodall",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Deputy_Secretary_Higginbottom_Poses_for_a_Photo_With_Dr._Jane_Goodall_and_the_State_Department%27s_Global_Health_Diplomacy_Director_Jordan_in_Washington_%2822365513310%29_%282%29_%28cropped_2%29.jpg/250px-thumbnail.jpg",
            wiki: "https://en.wikipedia.org/wiki/Jane_Goodall",
            description: "Primatologist known for her study of chimpanzee behavior."
        },
        {
            name: "Alexander Fleming",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Synthetic_Production_of_Penicillin_TR1468.jpg/250px-Synthetic_Production_of_Penicillin_TR1468.jpg",
            wiki: "https://en.wikipedia.org/wiki/Alexander_Fleming",
            description: "Discovered penicillin, the world's first antibiotic."
        }
    ],
    mathematics: [
        {
            name: "Aryabhata",
            photo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Aryabhatta_of_Bihar.jpg",
            wiki: "https://en.wikipedia.org/wiki/Aryabhata",
            description: "Ancient Indian mathematician and astronomer."
        },
        {
            name: "Srinivasa Ramanujan",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Srinivasa_Ramanujan_-_OPC_-_1.jpg/220px-Srinivasa_Ramanujan_-_OPC_-_1.jpg",
            wiki: "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan",
            description: "Mathematical genius known for his contributions to number theory."
        },
        {
            name: "Bhaskara II",
            photo: "https://i.pinimg.com/474x/71/5f/5e/715f5ecaf485a5cc999cc9730d7df375.jpg",
            wiki: "https://en.wikipedia.org/wiki/Bhaskara_II",
            description: "12th-century Indian mathematician and astronomer."
        },
        {
            name: "Euclid",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg/250px-Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Euclid",
            description: "Father of geometry, author of 'Elements'."
        },
        {
            name: "Pythagoras",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg/250px-Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg",
            wiki: "https://en.wikipedia.org/wiki/Pythagoras",
            description: "Greek mathematician famous for Pythagorean theorem."
        }
    ],
    'social-science': [
        {
            name: "Mahatma Gandhi",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
            wiki: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
            description: "Leader of Indian independence movement, pioneer of non-violence."
        },
        {
            name: "Jawaharlal Nehru",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Jawaharlal_Nehru%2C_1947.jpg/250px-Jawaharlal_Nehru%2C_1947.jpg",
            wiki: "https://en.wikipedia.org/wiki/Jawaharlal_Nehru",
            description: "First Prime Minister of independent India."
        },
        {
            name: "Subhas Chandra Bose",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/220px-Subhas_Chandra_Bose_NRB.jpg",
            wiki: "https://en.wikipedia.org/wiki/Subhas_Chandra_Bose",
            description: "Indian nationalist whose defiant patriotism made him a hero."
        },
        {
            name: "B. R. Ambedkar",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Dr._Bhimrao_Ambedkar.jpg/250px-Dr._Bhimrao_Ambedkar.jpg",
            wiki: "https://en.wikipedia.org/wiki/B._R._Ambedkar",
            description: "Architect of the Indian Constitution, social reformer."
        },
        {
            name: "Rani Lakshmibai",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Rani_of_jhansi.jpg/250px-Rani_of_jhansi.jpg",
            wiki: "https://en.wikipedia.org/wiki/Rani_of_Jhansi",
            description: "Queen of Jhansi, a leading figure in Indian Rebellion of 1857."
        }
    ],
    'computer-science': [
        {
            name: "Ada Lovelace",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png/250px-Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png",
            wiki: "https://en.wikipedia.org/wiki/Ada_Lovelace",
            description: "First computer programmer, worked on Charles Babbage's Analytical Engine."
        },
        {
            name: "Alan Turing",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg",
            wiki: "https://en.wikipedia.org/wiki/Alan_Turing",
            description: "Father of theoretical computer science and artificial intelligence."
        },
        {
            name: "Tim Berners-Lee",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
            description: "Inventor of the World Wide Web."
        },
        {
            name: "Grace Hopper",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/220px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Grace_Hopper",
            description: "Pioneer of computer programming, developed first compiler."
        },
        {
            name: "Bill Gates",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg",
            wiki: "https://en.wikipedia.org/wiki/Bill_Gates",
            description: "Co-founder of Microsoft, philanthropist."
        }
    ]
};

// Subject Titles
const subjectTitles = {
    physics: "Physics Laboratory",
    chemistry: "Chemistry Laboratory", 
    biology: "Biology Laboratory",
    mathematics: "Mathematics Laboratory",
    'social-science': "Social Science Laboratory",
    'computer-science': "Computer Science Laboratory",
    science: "Science Laboratory"
};

// Current subject tracking
let currentSubject = '';
let previousSection = 'labs';

// Open Subject (for main labs)
function openSubject(subject) {
    console.log('Opening subject:', subject);
    currentSubject = subject;
    previousSection = document.querySelector('.section.active').id;
    
    // Update title
    const title = document.getElementById('subject-title');
    const subtitle = document.getElementById('subject-subtitle');
    if (title) title.textContent = subjectTitles[subject] || 'Laboratory';
    if (subtitle) subtitle.textContent = 'Grades 1-10';
    
    if (subject === 'science') {
        // Show science branches
        showScienceBranches();
    } else {
        // Load scientists directly
        loadScientists(subject);
        showScientistsSection();
    }
    
    // Show subject detail section
    showSection('subject-detail');
}

// Show Science Branches
function showScienceBranches() {
    const branches = document.getElementById('science-branches');
    const scientistsGrid = document.getElementById('scientists-grid');
    const scientistsTitle = document.getElementById('scientists-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const labInfoSection = document.querySelector('.lab-info-section');
    
    if (branches) branches.style.display = 'block';
    if (scientistsGrid) scientistsGrid.style.display = 'none';
    if (scientistsTitle) scientistsTitle.style.display = 'none';
    if (sectionSubtitle) sectionSubtitle.style.display = 'none';
    if (labInfoSection) labInfoSection.style.display = 'none';
}

// Show Scientists Section
function showScientistsSection() {
    const branches = document.getElementById('science-branches');
    const scientistsGrid = document.getElementById('scientists-grid');
    const scientistsTitle = document.getElementById('scientists-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const labInfoSection = document.querySelector('.lab-info-section');
    
    if (branches) branches.style.display = 'none';
    if (scientistsGrid) scientistsGrid.style.display = 'grid';
    if (scientistsTitle) scientistsTitle.style.display = 'block';
    if (sectionSubtitle) sectionSubtitle.style.display = 'block';
    if (labInfoSection) labInfoSection.style.display = 'block';
}

// Load Scientists (FIXED VERSION - For Science Branches)
function loadScientists(subject) {
    console.log('Loading scientists for:', subject);
    const scientists = scientistsData[subject] || [];
    const scientistsGrid = document.getElementById('scientists-grid');
    const scientistsTitle = document.getElementById('scientists-title');
    
    if (!scientistsGrid) {
        console.error('Scientists grid not found!');
        return;
    }
    
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
        const subjectName = subjectTitles[subject]?.replace(' Laboratory', '') || subject.toUpperCase();
        scientistsTitle.textContent = `Famous ${subjectName} Scientists`;
    }
    
    // Show the scientists section (IMPORTANT: Hide branches, show scientists)
    showScientistsSection();
    
    // Update the main title to show the specific science branch
    const title = document.getElementById('subject-title');
    if (title) {
        title.textContent = subjectTitles[subject] || 'Laboratory';
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully');
    
    // Make sure home section is active on load
    showSection('home');
    
    // Add hover effects to lab preview cards
    document.querySelectorAll('.preview-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add click handlers to preview cards
        card.addEventListener('click', function() {
            const lab = this.dataset.lab;
            if (lab) {
                openSubject(lab);
            }
        });
    });
    
    // Add click handlers for room items
    document.querySelectorAll('.room').forEach(room => {
        room.addEventListener('click', function() {
            const lab = this.dataset.lab;
            if (lab && lab !== 'library') {
                openSubject(lab);
            }
        });
    });
    
    // Preload images for better performance
    setTimeout(() => {
        preloadImages();
    }, 1000);
});

// Image Preloading
function preloadImages() {
    const images = [];
    
    // Collect all image URLs
    Object.values(scientistsData).forEach(subject => {
        subject.forEach(scientist => {
            if (scientist.photo) {
                images.push(scientist.photo);
            }
        });
    });
    
    // Preload images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}