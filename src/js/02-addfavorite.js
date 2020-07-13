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
    // buscas con find el elemento clickado
    // lo añades a favorites
    // repintas, guardas en el local storage

    const clikedIdFav = seriesList.find(favItem => favItem.show.id === clickedId);
    favorites.push(clikedIdFav);
    paintSeriesCatalogue()
    paintSeriesFavorites();
    saveInfo();
    resetBtn.innerHTML = '<button class="finder__btn">Reset</>';


    // const clickedIndex = favorites.findIndex(favorite => favorite.show.id === clickedId);
    // // buscar el clickado dentro de favoritos con findIndex
    // // si existe lo sacas favorites
    // // con splice y el indice que ya tienes
    // // si no existe lo metes en favorites
};

//     


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
