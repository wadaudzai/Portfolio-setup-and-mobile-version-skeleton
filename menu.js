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
  if (email.value.match(/[A-Z]/)) {
    messageWhileError.push('Email should be written in lowercase letters.');
    error.innerHTML = messageWhileError.join(', ');
    event.preventDefault();
    event.stopPropagation();
  }
});

// Preserve data

const inputName = document.getElementById('name');
const textarea = document.getElementById('message-container');

form.addEventListener('input', () => {
  localStorage.setItem('Name', `${inputName.value}`);
  localStorage.setItem('Email', `${email.value}`);
  localStorage.setItem('TextArea', `${textarea.value}`);
});

inputName.value = localStorage.getItem('Name');
email.value = localStorage.getItem('Email');
textarea.value = localStorage.getItem('TextArea');

