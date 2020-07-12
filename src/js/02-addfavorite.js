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
        saveInfo(favorites);
        index.classList.add("color");
        index.classList.add("selected");
        resetBtn.innerHTML = '<button class="finder__btn">Reset</>';
        // paintSeriesFavorites(ev);
    } else {
        alert('This serie is already in your list');
    }
    console.log(favorites);
    console.log('me han clickado');
};



//FUNCIÓN PARA PINTAR EN FAVORITOS


const paintSeriesFavorites = (ev) => {

}



button.addEventListener('click', getDataFromApi);
button.addEventListener('click', paintSeriesCatalogue);
getInfo();
// paintSeriesCatalogue();

