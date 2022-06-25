
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


//Dynamics part

let projectInfo = [
  {
    name: "Tonic",
    title: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "./assets/images/tonic-page-1.png",
    "featured image desk": "./assets/images/snaposhot-1-desktop-p.png",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
    id: 0, 
  },
  {
    name: "Multi-Post Stories",
    title: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "./assets/images/Multi-post-stories.png",
    "featured image desk": "./assets/images/multi-post-portfolio-desktop-1.svg",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
    id: 1,
  },
  {
    name: "Tonic",
    title: "Facebook 360",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "./assets/images/Tonic-page3.png",
    "featured image desk": "./assets/images/facebook-360-desktop.svg",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
    id: 2,
  },
  {
    name: "Multi-Post Stories",
    title: "Uber Navigation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "./assets/images/multi-post-stories-2.png",
    "featured image desk": "./assets/images/uber-nav-desktop.svg",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
    id: 3,
  },
];

projectInfo.forEach((element, i) => {
  const work = document.querySelector('.work');
  const card = document.createElement('article');
  card.classList = 'work-section';
  if (i === 1){
    card.setAttribute('id', 'flipped');
  } else if (i === 3) {
    card.setAttribute('id', 'flipped');
  }

  const popupcard = `
  <img src="${projectInfo[i]["featured image"]}" alt="Snapshot Portfolio" class="portfolio-img-1-mobile">
<img src="${projectInfo[i]["featured image desk"]}" alt="Snapshot Portfolio"
    class="portfolio-img-1-desktop">
<article class="work-section-texts">
    <h2 class="project-title-heading text-mobile">${projectInfo[i].name}</h2>
    <h2 class="project-title-heading text-desktop">${projectInfo[i].title}</h2>

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
        <li><a href="#"><img src="./assets/icons/ruby-n-rails-tag.png" alt="RubyLogo" class="portfolio-img-1-desktop"></a></li>
        <li><a href="#"><img src="./assets/icons/csslogo.png" alt="csslogo"></a></li>
        <li><a href="#"><img src="./assets/icons/jslogo.png" alt="jslogo"></a></li>
    </ul>
    <div class="button-container">
        <button class="button-see-project" type="button" id="${projectInfo[i].id}">
            See project
        </button>
    </div>
</article>

`;
  card.innerHTML += popupcard;
  work.appendChild(card);
});

//button
const buttonsee = document.querySelectorAll(".button-see-project");
buttonsee.forEach((btn) => {
  btn.addEventListener("click", makeDiv);
});

//function is to create div and append it to body and add class to it
function makeDiv(event) {
  let popup = document.createElement("div");
  document.body.append(popup);
  popup.classList.add("pop-up-class");

  //add elements
  let header = document.createElement('div');
  header.classList.add('header-pp')
  let projecthead = document.createElement("h2");
  projecthead.classList.add("project-head");
  let projectimg = document.createElement("img");
  projectimg.classList.add('image-pp')
  let positiondiv = document.createElement('div');
  positiondiv.classList.add('position-div-pp');
  let projectdescrip = document.createElement("p");
  projectdescrip.classList.add("project-descrip");
  let langbtndiv = document.createElement('div');
  langbtndiv.classList.add('lang-btn-div');
  let projecttech = document.createElement("ul");
  projecttech.classList.add('lang-container-pp');
  let projectbtncontainer = document.createElement("div");
  let btnseelive = document.createElement("a");
  let btnseesource = document.createElement("a");
  let closeButton = document.createElement("button");
  closeButton.classList.add("closeButton-class");
  closeButton.id = "close-button";

  //append elements inside the div
  popup.append(
    header,
    projecthead,
    closeButton,
    projectimg,
    positiondiv,
    projectdescrip,
    langbtndiv,
    projecttech,
    projectbtncontainer
  );
  header.append(projecthead, closeButton);
  positiondiv.append(projectdescrip, langbtndiv, projecttech, projectbtncontainer);
  langbtndiv.append(projecttech,projectbtncontainer);
  projectbtncontainer.append(btnseelive, btnseesource);

  //add content to the elements of div
  let projectId = parseInt(event.target.id, 10);
  console.log(projectId);
  projecthead.textContent = projectInfo[projectId].name;
  projectimg.src = projectInfo[projectId]["featured image"];
  projectdescrip.textContent = projectInfo[projectId]["description"];

  for (let i = 0; i < projectInfo[projectId].technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    projectLi.className = 'languages-pp';
    projectLi.textContent = projectInfo[projectId].technologies[i];
    projecttech.appendChild(projectLi);
  }

  projectbtncontainer.classList.add('btn-container-class-pp')
  btnseelive.href = projectInfo[projectId]['link to live version']
  btnseelive.classList.add('btn-seelive-pp')
  btnseelive.target = '_blank'
  btnseelive.textContent = 'See Live'
  btnseesource.href = projectInfo[projectId]['link to source']
  btnseesource.classList.add('btn-seesource-pp')
  btnseesource.target = '_blank'
  btnseesource.textContent = 'See Source'


  //close button function
  const clickCloseButton = document.getElementById("close-button");
  clickCloseButton.addEventListener("click", closeButtonFunction);
  function closeButtonFunction() {
    popup.remove();
  }
}


