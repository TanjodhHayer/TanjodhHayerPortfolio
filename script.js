// Add to js/script.js

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, {
        threshold: 0.2 // Adjust this value to control when the animation starts
    });

    projects.forEach(project => {
        observer.observe(project);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollMessage = document.querySelector('.page-header__scroll');
    const homeProjectSection = document.getElementById('home-project');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hide the scroll message when the #home-project section is visible
                scrollMessage.classList.add('hidden');
            } else {
                // Show the scroll message again if the #home-project section is not visible
                scrollMessage.classList.remove('hidden');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe the #home-project section
    observer.observe(homeProjectSection);
});



function handleScroll() {
    const homeSection = document.getElementById('home-project');
    const sectionPosition = homeSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight * 0.8) {
        homeSection.classList.add('fade-in');
    } else {
        homeSection.classList.remove('fade-in');
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Check initial state

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('home-project');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.7 // Trigger the callback when 10% of the element is visible
    });

    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('home-project');
    const parentContainer = document.querySelector('.parent-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When #home-project is visible, hide the .parent-container
                parentContainer.style.opacity = '0';
                parentContainer.style.visibility = 'hidden';
            } else {
                // When #home-project is not visible, show the .parent-container
                parentContainer.style.opacity = '1';
                parentContainer.style.visibility = 'visible';
            }
        });
    }, {
        threshold: 0.7 // Trigger the callback when 70% of the element is visible
    });

    observer.observe(section);
});
