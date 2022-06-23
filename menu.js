const mobileNav = document.querySelector('.menu');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};

mobileNav.addEventListener('click', () => toggleNavbar());

// Validate contact form
const form = document.forms[0];
const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
  const messageWhileError = [];
  if (email.value.match(/[A-Z]/)){
  messageWhileError.push('Email should be written in lowercase letters.');
  error.innerHTML = messageWhileError.join(', ');
  event.preventDefault();
  event.stopPropagation();
  }
});