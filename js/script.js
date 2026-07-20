// THEME TOGGLE CODE

// Grab the button element from the HTML
const toggleButton = document.querySelector('.theme-toggle');
const themeIcon = toggleButton.querySelector('ion-icon');

// Calculates the icon state based on the current theme and hover
function updateThemeIcon(isHovering = false) {
    const isLight = document.documentElement.classList.contains('light-mode');

    if (isLight) {
        // Light mode so show moon variants
        if (isHovering) {
            themeIcon.setAttribute('name', 'moon');
        } else {
            themeIcon.setAttribute('name', 'moon-outline');
        }
    } else {
        // Dark mode so show sun
        if (isHovering) {
            themeIcon.setAttribute('name', 'sunny');
        } else {
            themeIcon.setAttribute('name', 'sunny-outline');
        }
    }
}

updateThemeIcon();

// Listen for the user to click the button
toggleButton.addEventListener('click', () => {
const isLight = document.documentElement.classList.contains('light-mode');
    
    if (isLight) {
        // Switch to Dark
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        // Switch to Light
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
        localStorage.setItem('portfolio-theme', 'light');
    }

    updateThemeIcon(true); // Update the icon, passing true as hover is guaranteed on click
});

// Track mouse hover states to trigger filled/outline icon changes
toggleButton.addEventListener('mouseenter', () => {
    updateThemeIcon(true);
});

toggleButton.addEventListener('mouseleave', () => {
    updateThemeIcon(false);
});

// CONTACT FORM RESET CODE

// Clears the contact form whenever the page becomes visible (including back-button navigation)
window.addEventListener('pageshow', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.reset();
    }
});