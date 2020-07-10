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
                results += `<img src="'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'"                 class="serie__img" alt="${element.show.name} " />`;
                results += `<h4 class="serie__title">${seriesList[index].show.name}     </h4>`;
                results += `</article>`;
            }
        }
        const seriesElement = document.querySelector('.js-results');
        seriesElement.innerHTML = results;
    }
    listenSearchClick();
};

button.addEventListener('click', paintSeriesCatalogue);


'use strict';

//ASIGNO LOS LISTENERS A LOS ARTICLEs

const listenSearchClick = () => {
    const seriesBtns = document.querySelectorAll('.js-selectFav');
    for (let serieBtn of seriesBtns) {
        serieBtn.addEventListener('click', saveFavorites);
        serieBtn.addEventListener('click', paintSeriesFavorites);
    }
};


// SELECCCIONAR COMO FAV       

function saveFavorites(ev) {
    const index = ev.currentTarget.id;
    if (favorites.indexOf(index) === -1) {
        favorites.push(index);
        // index.classList.add("color");
    } else {
        alert('Esta serie ya es tu favorita');
    }
    console.log(favorites);
    paintSeriesFavorites();
};


//FUNCIÓN PARA PINTAR EN FAVORITOS

const paintSeriesFavorites = (ev) => {
    let favSeries = ''; {
        for (let index = 0; index < seriesList.length; index += 1) {
            favSeries += `<li class= "list">`;
            favSeries += `<article class="serieFav">`;
            favSeries += `<p class="serie__btn js-selectFav"
            id="${seriesList[index].show.id}"
            data-index="${index}">`;
            favSeries += `<img src="${seriesList[index].show.image}" class="serie__img" alt="${seriesList[index].show.name}" />`;
            favSeries += `<h4 class="serie__title">${seriesList[index].show.name}</h4>`;
            favSeries += `</p>`;
            favSeries += `</article>`;
            favSeries += `</li>`;
        }
    }
    const seriesFavsSelected = document.querySelector('.js-favs');
    seriesFavsSelected.innerHTML = favSeries;
    saveFavorites();
    saveInfo();
};


button.addEventListener('click', getDataFromApi);
paintSeriesCatalogue();


'use strict';

//LOCAL STORAGE

function saveInfo() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getInfo() {
    const data = JSON.parse(localStorage.getItem('favorites'));
    if (data !== null) {
        favorites = data;
    }
};

//# sourceMappingURL=main.js.map
