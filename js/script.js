// Grab the button element from the HTML
const toggleButton = document.querySelector('.theme-toggle');

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
});
