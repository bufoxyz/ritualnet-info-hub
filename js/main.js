// Ritualnet Info Hub - Main JavaScript File

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Ritualnet Info Hub: Scripts loaded successfully.");

    // Simple fade-in effect for the main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = 0;
        setTimeout(() => {
            mainContent.style.transition = 'opacity 1.5s ease-in-out';
            mainContent.style.opacity = 1;
        }, 100);
    }
});
