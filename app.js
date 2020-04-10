// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {

  if (body.classList.contains('solar')) {
    
    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarize';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};

const swup = new Swup();

//bubble animation

const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.navbar-nav li');

hamburguer.addEventListener("click", () => {
  navLinks.classList.toggle("open");

});

//Scroll Bar

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeight) * 100; progress.style.height = progressHeight + "%";
}