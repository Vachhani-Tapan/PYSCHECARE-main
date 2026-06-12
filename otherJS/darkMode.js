// Dark Mode Toggle Script
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    const body = document.body;
    
    // Check for saved dark mode preference or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled' || 
                       (localStorage.getItem('darkMode') === null && 
                        window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Apply dark mode on page load
    if (isDarkMode) {
        body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            darkModeToggle.setAttribute('title', 'Toggle Light Mode');
        }
    }
    
    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Update localStorage and button state
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                darkModeToggle.setAttribute('title', 'Toggle Light Mode');
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                darkModeToggle.setAttribute('title', 'Toggle Dark Mode');
            }
        });
    }
});
