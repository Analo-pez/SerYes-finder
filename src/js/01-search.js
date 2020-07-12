'use strict';

// SELECTORS

let inputName = document.querySelector('.js-inputName');
const button = document.querySelector('.js-button');
let results = document.querySelector('.js-results');
let favSeries = document.querySelector('.js-favs');

//CREAMOS ARRAYS

let seriesList = [];
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

button.addEventListener('click', fullInputSearch);

//FUNCION PARA PINTAR CATÁLOGO
const paintSeriesCatalogue = (ev) => {
    let results = ''; {
        for (let index = 0; index < seriesList.length; index += 1) {
            let element = seriesList[index];
            if (element.show.image !== null) {
                results += `<article class="serie serie__btn js-selectFav" id="${element.show.id}"
                    data-index="${index}"
                    data-id="${element.show.id}">`;
                results += `<img src="${element.show.image.medium}  " class="serie__img" alt="${element.show.name} " />`;
                results += `<h4 class="serie__title">${seriesList[index].show.name}     </h4>`;
                results += `</article>`;
            }
            else {
                results += `<article class="serie serie__btn js-selectFav" id="${element.show.id}" data-index="${index}" data-id="${element.show.id}">`;
                results += `<img src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV'                 class="serie__img" alt="${element.show.name} " />`;
                results += `<h4 class="serie__title">${seriesList[index].show.name}     </h4>`;
                results += `</article>`;
            }
        }
        const seriesElement = document.querySelector('.js-results');
        seriesElement.innerHTML = results;
        listenSearchClick();
    }
};

button.addEventListener('click', paintSeriesCatalogue);

