const resetFavorites = (ev) => {
    favorites = [];
    localStorage.clear();
    const seriesFavsSelected = document.querySelector('.js-favs');
    seriesFavsSelected.innerHTML = "";
    resetBtn.classList.add('hidden');
};

resetBtn.addEventListener("click", resetFavorites);
