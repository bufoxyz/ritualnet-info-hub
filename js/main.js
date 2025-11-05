// Ritualnet Info Hub - Main JavaScript File

document.addEventListener('DOMContentLoaded', (event) => {
    // Basic script to confirm the JS is loading correctly
    console.log("Ritualnet Info Hub: Scripts loaded successfully.");

    // Example function: Add a class to the header after scrolling
    window.onscroll = function() {
        const header = document.querySelector('header');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
});

// You can add more interactive functions here, such as form validation or API calls.
