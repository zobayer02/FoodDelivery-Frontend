// Scroll to section smoothly when a sidebar link is clicked
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Example of dynamically updating dashboard data (if needed)
console.log("Admin Dashboard Loaded!");
