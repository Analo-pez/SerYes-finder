'use strict';

// SELECCCIONAR COMO FAV

// --Me da fallo como find is not function--
// const handleSeriesClick = ev => {
//     // obtenemos el id de la serie clickada
//     const clickedId = parseInt(ev.currentTarget.id);
//     // buscamos con find
//     const result = results.find(resultItem => resultItem.id === clickedId);
//     favorites.push(result);
//     paintSeriesFavorites();
// };

// --Me da fallo como results is not iterable-
const handleSeriesClick = ev => {
    const clickedId = parseInt(ev.currentTarget.id);
    for (const result of results) {
        if (result.id === clickedId) {
            favorites.push(result);
            paintSeriesFavorites();
        }
    }
};


const listenSearchClick = () => {
    const seriesBtns = document.querySelectorAll('.js-selectFav');
    for (let index = 0; index < seriesBtns.length; index++) {
        const seriesBtn = seriesBtns[index];
        seriesBtn.addEventListener('click', handleSeriesClick);
    }
};


const paintSeriesFavorites = (ev) => {
    let favSeries = '';
    {
        for (let index = 0; index < seriesList.length; index += 1) {
            favSeries += `<li>`
            favSeries += `<article class="serie">`;
            favSeries += `<button class="serie__btn js-selectFav"
            id="${seriesList[index].id}"
            data-index="${index}"
            data-id="${seriesList[index].id}">`;
            favSeries += `<img src="${seriesList[index].image}" class="serie__img" alt="${seriesList[index].name}" />`;
            favSeries += `<h4 class="serie__title">${seriesList[index].name}</h4>`;
            favSeries += `</button>`;
            favSeries += `</article>`;
            favSeries += `</li>`;
        }
    }
    const seriesFavsSelected = document.querySelector('.js-favs');
    seriesFavsSelected.innerHTML = favSeries;
    listenSearchClick();
};


getDataFromApi();
// paintSeriesCatalogue();

