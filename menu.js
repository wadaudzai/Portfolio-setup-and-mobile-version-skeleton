const mobileNav = document.querySelector('.menu');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};

mobileNav.addEventListener('click', () => toggleNavbar());
