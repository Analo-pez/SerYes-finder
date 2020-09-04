const resetFavorites = (ev) => {
    console.log('me han clickado');
    favoritesSelect = [];
    saveInfo();
    paintSeriesFavorites();
    listenSearchClick();
};

resetBtn.addEventListener("click", resetFavorites);
