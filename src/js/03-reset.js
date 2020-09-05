const resetFavorites = (ev) => {
    favoritesSelect = [];
    saveInfo();
    paintSeriesFavorites();
    paintSeriesCatalogue();
};

resetBtn.addEventListener("click", resetFavorites);