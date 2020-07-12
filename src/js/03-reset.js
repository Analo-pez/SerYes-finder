const resetFavorites = (ev) => {
    favorites = [];
    localStorage.clear();
    // paintSeriesFavorites();
    resetBtn.classList.add('hidden');
};

resetBtn.addEventListener("click", resetFavorites);
