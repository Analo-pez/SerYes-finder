const resetFavorites = (ev) => {
    console.log('me han clickado');
    favorites = [];
    saveInfo();
    // resetBtn.classList.add('hidden');
};

resetBtn.addEventListener("click", resetFavorites);
