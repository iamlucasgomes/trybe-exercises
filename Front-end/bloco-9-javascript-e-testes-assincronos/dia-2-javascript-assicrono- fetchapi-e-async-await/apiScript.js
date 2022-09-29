// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async ()  => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
    const response = await fetch(API_URL, myObject)
     const data =  await response.json()
     document.getElementById('jokeContainer').innerText = data.joke
}
window.onload = () => fetchJoke();