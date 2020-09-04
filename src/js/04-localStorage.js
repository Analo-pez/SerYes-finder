'use strict';

//LOCAL STORAGE

function saveInfo() {
    localStorage.setItem('favoriteSerie', JSON.stringify(favoritesSelect));
}

function getInfo() {
    const data = JSON.parse(localStorage.getItem('favoriteSerie'));
    if (data !== null) {
        favoritesSelect = data;
    }
    paintSeriesFavorites()
};

