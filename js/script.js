// Grab the button element from the HTML
const toggleButton = document.querySelector('.theme-toggle');

// Check on load if the user previously chose light mode
if (localStorage.getItem('porfolio-theme') === 'light') {
    document.body.classList.add('light-mode');
}

// Listen for the user to click the button
toggleButton.addEventListener('click', () => {
    // Flip the "light-mode" class on or off on the body tag
    document.body.classList.toggle('light-mode');

    // Check if light mode is currently active and store the preference in localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('porfolio-theme', 'light'); // Save preference as light
    } else {
        localStorage.setItem('porfolio-theme', 'dark'); // Save preference as dark
    }
});