'use strict';

//LOCAL STORAGE

function saveInfo() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getInfo() {
    const data = JSON.parse(localStorage.getItem('favorites'));
    if (data !== null) {
        favorites = data;
    }
};
