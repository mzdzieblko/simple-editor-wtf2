import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


// localStorage.removeItem

const entry = localStorage.getItem("entry");
console.log(entry);
let result = "";

if (entry) {
    result = entry;
}



const editor__content = document.querySelector(".editor__content--js");
editor__content.value = result;

console.log(editor__content.value);

const btn = document.querySelector(".btn--js");
console.log(btn);

btn.addEventListener('click', () => {
    localStorage.setItem('entry', editor__content.value);
})


console.log(entry);

const loadStarage = localStorage.getItem("entry");

console.log(loadStarage);

const load = document.querySelector(".btn__dark--js");

load.addEventListener('click', () => {
    editor__content.value = loadStarage;
})

console.log(load.value);