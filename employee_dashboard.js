function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Set the first section to be visible by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('delivery-drivers');
});
