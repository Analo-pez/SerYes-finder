'use strict';

//LOCAL STORAGE

function saveInfo() {
    localStorage.setItem('favoriteSerie', JSON.stringify(favorites));
}

function getInfo() {
    const data = JSON.parse(localStorage.getItem('favoriteSerie'));
    if (data !== null) {
        favorites = data;
    }
};

