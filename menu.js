const mobileNav = document.querySelector('.menu');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};

mobileNav.addEventListener('click', () => toggleNavbar());

// Validate contact form
const form = document.forms[0];
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {

  if (email.value.match(/[A-Z]/)){
  event.preventDefault();
  event.stopPropagation();
  }
});