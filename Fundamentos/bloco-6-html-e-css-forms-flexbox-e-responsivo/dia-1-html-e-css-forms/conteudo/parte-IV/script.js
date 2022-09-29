// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function(event) {
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', function(event) {
  event.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', function(event) {
  const key = event.key;
  if (key !== 'a') {
    event.preventDefault();
  } 
})

// INPUT_TEXT.addEventListener('keypress', (event) => {
//   const character = event.key;
//   if (character !== 'a') {
//     event.preventDefault();
// }})
