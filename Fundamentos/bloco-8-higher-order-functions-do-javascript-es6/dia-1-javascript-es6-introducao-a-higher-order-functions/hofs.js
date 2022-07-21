const wakingUp = () => 'Acordando!!';
const LetsHaveCoffee = () =>  'Bora tomar café!!';
const wentToSleep = () => 'partiu dormir!!';
const doingThings = (func) => console.log(func);

doingThings(wakingUp());
doingThings(LetsHaveCoffee());
doingThings(wentToSleep()); 
