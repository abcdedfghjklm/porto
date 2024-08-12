const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');

// Add a click event listener to the toggle button
menuToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the menu
  menu.classList.toggle('active');
  // Toggle the 'active' class on the hamburger icon
  menuToggle.classList.toggle('active');
});