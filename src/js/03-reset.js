const resetFavorites = (ev) => {
    favoritesSelect = [];
    saveInfo();
    paintSeriesFavorites();
    listenSearchClick();
};

resetBtn.addEventListener("click", resetFavorites);