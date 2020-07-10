'use strict';

// SELECTORS

let inputName = document.querySelector('.js-inputName');
const button = document.querySelector('.js-button');
let results = document.querySelector('.js-results');
let favSeries = document.querySelector('.js-favs');

//CREAMOS ARRAYS

let seriesList= [];
let favorites = [];

// LLAMAMOS A LA API
const getDataFromApi = () => {
    const serieName = inputName.value;
    fetch(`http://api.tvmaze.com/search/shows?q=${serieName}`)
        .then(response => response.json())
        .then(data => {
            seriesList = data;
            console.log(seriesList);
            paintSeriesCatalogue(); //pintar
        })
        .catch(err => {
    console.log('Ha habido un error', err);
  });
};


//FUNCIÓN ALERTA WRITE A SERIE NAME
function fullInputSearch(evt) {
  if (inputName.value === '') {
   return alert('Write a serie name');
  }
};

button.addEventListener('click', fullInputSearch )

//FUNCION PARA PINTAR CATÁLOGO
const paintSeriesCatalogue = (ev) => {
    let results = '';{
        for (let index = 0; index < seriesList.length; index += 1) {
            console.log(seriesList[index].show.name);
            results += `<article class="serie">`;
            results += `<p class="serie__btn js-selectFav"
            id="${seriesList[index].show.id}"
            data-index="${index}"
            data-id="${seriesList[index].show.id}">`;
            results += `<img src="${seriesList[index].show.image}" class="serie__img" alt="${seriesList[index].show.name}" />`;
            results += `<h4 class="serie__title">${seriesList[index].show.name}</h4>`;
            results += `</p>`;
            results += `</article>`;
        }
    }
    const seriesElement = document.querySelector('.js-results');
    seriesElement.innerHTML = results;
    listenSearchClick();
    // console.log(results);
};

button.addEventListener('click', paintSeriesCatalogue);



// Si no tiene imagen, por defecto, si tiene la de su ruta
// const getImageSerie = () => {

//         if (results.show.image.src === null) {
//             return 
//         } else {
//             // sí está: muestro un alert
//             alert('This serie is already in your list!');
//         }
//     };
