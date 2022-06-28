const title = document.getElementById('header-container');
const emergency = document.querySelectorAll('.emergency-tasks h3');
const noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
const emergencyBody = document.querySelector('.emergency-tasks');
const noEmergencyBody = document.querySelector('.no-emergency-tasks');
const footer = document.getElementById('footer-container');




title.style.backgroundColor = 'rgb(50,176,105)';

for(let index = 0; index < emergency.length; index += 1){
  emergency[index].style.backgroundColor = 'rgb(165,0,243)';
}

for(let index = 0; index < noEmergency.length; index += 1){
  noEmergency[index].style.backgroundColor = 'rgb(35,37,37)';
}

emergencyBody.style.backgroundColor = 'rgb(248,159,132)';
noEmergencyBody.style.backgroundColor = 'rgb(249,219,94)';
footer.style.backgroundColor = 'rgb(11,53,51)';