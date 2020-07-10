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

