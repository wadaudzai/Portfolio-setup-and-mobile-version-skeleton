console.log("walid");
//object properties
let projectInfo = [
  {
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "./assets/images/tonic-page-1.png",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
  {
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
  {
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
  {
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "",
    technologies: ["html", "css", "javascript"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
  {
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "",
    technologies: ["html", "css", "javascript", "ruby", "github", "bootstrap"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
  {
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "",
    technologies: ["html", "css", "javascript", "ruby", "github", "bootstrap"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
  {
    name: "Facebook 360",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "",
    technologies: ["html", "css", "javascript", "ruby", "github", "bootstrap"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
  {
    name: "Uber Navigation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "featured image": "",
    technologies: ["html", "css", "javascript", "ruby", "github", "bootstrap"],
    "link to live version":
      "https://wadaudzai.github.io/Portfolio-setup-and-mobile-version-skeleton/",
    "link to source":
      "https://github.com/wadaudzai/Portfolio-setup-and-mobile-version-skeleton",
  },
];

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
  let projecthead = document.createElement("h2");
  projecthead.classList.add("project-head");
  let projectimg = document.createElement("img");
  let projectdescrip = document.createElement("p");
  projectdescrip.classList.add("project-descrip");
  let projecttech = document.createElement("ul");
  let projectbtncontainer = document.createElement("div");
  let btnseelive = document.createElement("a");
  let btnseesource = document.createElement("a");

  let closeButton = document.createElement("button");
  closeButton.classList.add("closeButton-class");
  closeButton.id = "close-button";

  //append elements inside the div
  popup.append(
    projecthead,
    closeButton,
    projectimg,
    projectdescrip,
    projecttech,
    projectbtncontainer
  );
  projectbtncontainer.append(btnseelive, btnseesource);

  //add content to the elements of div
  let projectId = parseInt(event.target.id, 10);
  console.log(projectId);
  projecthead.textContent = projectInfo[projectId].name;
  projectimg.src = projectInfo[projectId]["featured image"];
  projectdescrip.textContent = projectInfo[projectId]["description"];

  //close button function
  const clickCloseButton = document.getElementById("close-button");
  clickCloseButton.addEventListener("click", closeButtonFunction);
  function closeButtonFunction() {
    popup.remove();
  }
}
