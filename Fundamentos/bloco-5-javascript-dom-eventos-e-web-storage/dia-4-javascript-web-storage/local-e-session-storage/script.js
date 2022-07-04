const slider = document.querySelector('.slider');
const footer = document.querySelector('footer');
const dropBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');

slider.addEventListener('click', dark);

function dark() {
  const body = document.querySelector('body');
  body.classList.toggle('dark');
}

function font() {
  const menu = ['times', 'garamond', 'opensans']
  const li = document.createElement('li');
  
}