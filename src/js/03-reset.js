const resetFavorites = (ev) => {
    console.log('me han clickado');
    favorites = [];
    saveInfo();
    // paintSeriesFavorites();
    resetBtn.classList.add('hidden');
};

resetBtn.addEventListener("click", resetFavorites);
