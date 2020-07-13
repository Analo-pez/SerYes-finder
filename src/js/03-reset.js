const resetFavorites = (ev) => {
    console.log('me han clickado');
    favorites = [];
    saveInfo();
    paintSeriesFavorites();
    listenSearchClick();
    resetBtn.classList.add('hidden');
};

resetBtn.addEventListener("click", resetFavorites);
