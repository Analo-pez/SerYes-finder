'use strict';

// SELECCCIONAR COMO FAV 

const saveFavorites = (ev) => {
    let results = '';
    const clicked = parseInt(ev.currentTarget);
    for (const result of results) {
        if (result === clicked && results.indexOf(index) === -1) {
            favorites.push(result);
            paintSeriesFavorites();
        } else {
            // sí está: muestro un alert
            alert('This serie is already in your list!');
        }
    }
};
console.log(favorites);

const listenSearchClick = () => {
    const seriesBtns = document.querySelectorAll('.js-selectFav');
    for (let index = 0; index < seriesBtns.length; index++) {
        const seriesBtn = seriesBtns[index];
        seriesBtn.addEventListener('click', saveFavorites);
    }
};


//FUNCIÓN PARA PINTAR EN FAVORITOS

const paintSeriesFavorites = (ev) => {
    let favSeries = ''; {
        for (let index = 0; index < seriesList.length; index += 1) {
            favSeries += `<li>`;
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
    listenSearchClick();
    saveInfo();
};


button.addEventListener('click', getDataFromApi);
paintSeriesCatalogue();

