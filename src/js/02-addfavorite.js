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
    const clickedId = parseInt(ev.currentTarget.id);

    const clikedIdFav = seriesList.find(favItem => favItem.show.id === clickedId);
    favorites.push(clikedIdFav);
    paintSeriesFavorites();
    saveInfo();
    resetBtn.innerHTML = '<button class="finder__btn">Reset</>';
};

//FUNCIÓN PARA PINTAR EN FAVORITOS

const paintSeriesFavorites = (ev) => {
    let results = ''; {
        for (let index = 0; index < favorites.length; index += 1) {
            let element = favorites[index];
            results += `<li class= "list">`;
            results += `<article class="serieFav" id="${element.show.id}"
            data-index="${index}"
            data-id="${element.show.id}">`;
            if (element.show.image !== null) {
                results += `<img src="${element.show.image.medium}  " class="serie__img" alt="${element.show.name} " />`;
            } else {
                results += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" class="serie__img" alt="${element.show.name} " />`;
            }
            results += `<h4 class="serie__title">${favorites[index].show.name}     </h4>`;
            results += `</article>`;
            results += `</li>`;
        }
        const seriesElement = document.querySelector('.js-favs');
        seriesElement.innerHTML = results;
    }

};


button.addEventListener('click', getDataFromApi);
button.addEventListener('click', paintSeriesCatalogue);
getInfo(favorites);
