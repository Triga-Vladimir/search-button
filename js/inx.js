const searchButton = document.querySelector('.search-button');
const searchDiv = document.querySelector('.search');
const searchInput = document.querySelector('input');
searchButton.addEventListener('click', () => {
    searchButton.classList.toggle('open');
    searchDiv.classList.toggle('open');
    searchInput.value = '';
})
