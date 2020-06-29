import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


// localStorage.removeItem

const entry = localStorage.getItem("local");

let result = "";

if (entry) {
    result = entry;
}

const editor__content = document.querySelector(".editor__content--js");
editor__content.value = result;

const btn = document.querySelector(".btn--js");
console.log("btn--js");

btn.addEventListener('click', () => {
    sessionStorage.setItem('entry', editor__content.value);
})


const load = localStorage.getItem("entry");

console.log(load);

let resultLoad = "";

if (entry) {
    resultLoad = entry;
}

const editor = document.querySelector(".editor__content--js");
editor.value = resultLoad;

const btnLoad = document.querySelector(".btn__dark--js");

btnLoad.addEventListener('click', () => {
    localStorage.setItem('entry', editor.value);
})