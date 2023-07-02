const burgerBtn = document.querySelector('.header__mob-btn');
const burger = document.querySelector('.burger');

const toggleBurger = () => {
    burger.classList.toggle('open');
};

burgerBtn.addEventListener('click', toggleBurger);
