const headerCityButton = document.querySelector('.header__city-button');


headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?' //сохраняем город в localStorage

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});


// блокировка скрола

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY
    })
};

//модальное окно

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

///////////////////////////////////////////////

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();
}

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
}

////////////////////////////////////////////////

subheaderCart.addEventListener('click', cartModalOpen);


cartOverlay.addEventListener('click', event => {
    const targer= event.target;

    if(targer.matches('.cart__btn-close') || targer.matches('.cart-overlay')){
        cartModalClose();
    }
});