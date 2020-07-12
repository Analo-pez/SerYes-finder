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
        resetBtn.innerHTML = '<button class="finder__btn">Reset</>';
        paintSeriesFavorites();
    } else {
        alert('This serie is already in your list');
    }
    console.log(favorites);
    console.log('me han clickado');
};


//FUNCIÓN PARA PINTAR EN FAVORITOS

const paintSeriesFavorites = (ev) => {
    let results = ''; {
        for (let index = 0; index < favorites.length; index += 1) {
            let element = seriesList[index];
            if (element.show.image !== null) {
                results += `<li class= "list">`;
                results += `<article class="serieFav" id="${element.show.id}"
                data-index="${index}"
                data-id="${element.show.id}">`;
                results += `<img src="${element.show.image.medium}  " class="serie__img" alt="${element.show.name} " />`;
                results += `<h4 class="serie__title">${seriesList[index].show.name}     </h4>`;
                results += `</article>`;
                results += `</li>`;
            }
            else {
                results += `<li class= "list">`;
                results += `<article class="serieFav" id="${element.show.id}" data-index="${index}" data-id="${element.show.id}">`;
                results += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"                 class="serie__img" alt="${element.show.name} " />`;
                results += `<h4 class="serie__title">${seriesList[index].show.name}     </h4>`;
                results += `</article>`;
                results += `</li>`;
            }
        }
        const seriesElement = document.querySelector('.js-favs');
        seriesElement.innerHTML = results;
    }

};


button.addEventListener('click', getDataFromApi);
button.addEventListener('click', paintSeriesCatalogue);
getInfo();
