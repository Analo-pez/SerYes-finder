'use strict';

//ASIGNO LOS LISTENERS A LOS ARTICLEs

const listenSearchClick = () => {
    const seriesBtns = document.querySelectorAll('.js-selectFav');
    for (let serieBtn of seriesBtns) {
        serieBtn.addEventListener('click', saveFavorites);
    }
};


// SELECCCIONAR COMO FAV       

function saveFavorites(ev) {
    const index = ev.currentTarget;
    if (favorites.indexOf(index) === -1) {
        favorites.push(index);
        saveInfo();
        index.classList.add("color");
        index.classList.add("selected");
        resetBtn.innerHTML = '<button class="finder__btn">Reset</button>';
        // paintSeriesFavorites();
    } else {
        alert('This serie is already in your list');
    }
    console.log(favorites);
    console.log('me han clickado');
};



//FUNCIÓN PARA PINTAR EN FAVORITOS


// const paintSeriesFavorites = (ev) => {
//     for (let index = 0; index < seriesList.length; index += 1) {
//         favSeries += `<li class= "list">`;
//         favSeries += `<article class="serieFav">`;
//         favSeries += `<p class="serie__btn js-selectFav"
//                 ">`;
//         favSeries += `<img src="${seriesList[index].show.image}" class="serie__img" alt="${seriesList[index].show.name}" />`;
//         favSeries += `<h4 class="serie__title">${seriesList[index].show.name}</h4>`;
//         favSeries += `</p>`;
//         favSeries += `</article>`;
//         favSeries += `</li>`;
//     }
//     const seriesFavsSelected = document.querySelector('.js-favs');
//     seriesFavsSelected.innerHTML = favSeries;
// };




button.addEventListener('click', getDataFromApi);
button.addEventListener('click', paintSeriesCatalogue);
getInfo();


