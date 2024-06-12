document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.label16 input');
    var menuChoice = document.querySelector('.menu-choice');
    
    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            menuChoice.classList.add('active');
        } else {
            menuChoice.classList.remove('active');
        }
    });
});