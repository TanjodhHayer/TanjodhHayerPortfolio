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
