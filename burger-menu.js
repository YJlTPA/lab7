const burgerMenu = document.querySelector('.header__burger');
const nav = document.querySelector('.navigation');
const handleBurgerClick = (evt) => {
    evt.preventDefault();

    burgerMenu.classList.toggle('is-active');
    if (burgerMenu.classList.contains('is-active')) {
        nav.style.display = 'block';
    } else {
        nav .style.display = 'none';
    }

}

burgerMenu.addEventListener('click', handleBurgerClick);
