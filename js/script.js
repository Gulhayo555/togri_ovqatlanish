
let secondSection = document.querySelector(".main"),
  secondSectionTitle = document.querySelector(".info_title");
text = document.querySelector(".info_p");
window.addEventListener("scroll", function scroll() {
  if (this.scrollY > secondSection.offsetTop - 1000) {
    setTimeout(() => {
      secondSectionTitle.style.transition = `1.5s`;
      secondSectionTitle.style.transform = `translateX(0px)`;
    }, 100);

    setTimeout(() => {
      text.style.transition = `1.2s`;
      text.style.transform = `translateX(0px)`;
    }, 200);

    window.removeEventListener("scroll", scroll);
  }
});
let title = document.querySelector(".title");
titleText = title.innerHTML;
title.innerHTML = "";
let iteration = 0;
function typing() {
  title.innerHTML += titleText[iteration];
  iteration++;
  if (iteration < titleText.length) {
    setTimeout(() => {
      typing();
    }, 300);
  }
}
typing();

const boxes = document.querySelectorAll(".team_box");
const img = document.querySelector('.info_img_3')

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const flights =document.querySelector('.flights')

left.addEventListener('mouseenter', () => flights.classList.add('hover-left'))
left.addEventListener('mouseleave' , () => flights.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => flights.classList.add('hover-right'))
right.addEventListener('mouseleave', () => flights.classList.remove('hover-right'))





const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeAllClasses();
    card.classList.add("active");
  });
});
function removeAllClasses() {
  cards.forEach((card) => card.classList.remove("active"));
}

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.nav.content ul');
const navLinks = document.querySelectorAll('.nav.content a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}