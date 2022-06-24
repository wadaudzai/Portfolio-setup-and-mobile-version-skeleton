
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
//making call name and textrea
const inputName = document.getElementById('name');
const textarea = document.getElementById('message-container');
//Adding listner for event handling
form.addEventListener('input', () => {
  localStorage.setItem('Name', `${inputName.value}`);
  localStorage.setItem('Email', `${email.value}`);
  localStorage.setItem('TextArea', `${textarea.value}`);
});
//get values from local storage
inputName.value = localStorage.getItem('Name');
email.value = localStorage.getItem('Email');
textarea.value = localStorage.getItem('TextArea');
const popuparray = [
  {
    heading: 'Tonic',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio1.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    heading: 'Multi-Post Stories',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s, when an unknown printer took a galley of type andbled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    heading: 'Tonic',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      " Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s, when an unknown printer took a galley of type andbled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio(1).png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    heading: 'Multi-Post Stories',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s, when an unknown printer took a galley of type andbled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio(2).png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
  },
];

popuparray.forEach((element, i) => {
  const popup = document.querySelector('.work');
  const card = document.createElement('article');
  card.classList = 'work-section';
 
  const popupcard = `
  <img src="${popuparray[0].image}" alt="Snapshot Portfolio" class="portfolio-img-1-mobile">
<img src="./assets/images/snaposhot-1-desktop-p.png" alt="Snapshot Portfolio"
    class="portfolio-img-1-desktop">
<article class="work-section-texts">
    <h2 class="project-title-heading">Tonic</h2>

    <article class="frame-2">
        <h2 class="client-heading text-mobile">CANOPY</h2>
        <h2 class="client-heading text-desktop">CANOPY</h2>
        <img src="./assets/icons/Counter.png" alt="Counter">
        <h2 class="role text-mobile">Back End Dev</h2>
        <h2 class="role text-desktop">Back End Dev</h2>
        <img src="./assets/icons/Counter.png" alt="Counter">
        <h2 class="year text-mobile">2015</h2>
        <h2 class="year text-desktop">2015</h2>
    </article>

    <p class="project-info-p text-mobile">
        A daily selection of privately personalized reads; no accounts or sign-ups required.
    </p>
    <p class="project-info-p text-desktop">
        A daily selection of privately personalized reads; no accounts or sign-ups required.
    </p>

    <ul class="logo-tags">
        <li><a href="#"><img src="./assets/icons/Htmllogo.png" alt="Htmllogo"></a></li>
        <li><a href="#"><img src="./assets/icons/csslogo.png" alt="csslogo"></a></li>
        <li><a href="#"><img src="./assets/icons/jslogo.png" alt="jslogo"></a></li>
    </ul>
    <div class="button-container">
        <button class="button-see-project" type="button">
            See project
        </button>
    </div>
</article>

`;
  card.innerHTML += popupcard;
  popup.appendChild(card);
});


