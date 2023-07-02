const refs = {
    burgerBtnEl: document.querySelector('.header__mob-btn'),
    burgerEl: document.querySelector('.burger'),
    backdropEl: document.querySelector('.mob-menu__backdrop'),
    mobMenuEl: document.querySelector('.mob-menu__container'),
    bodyEl: document.querySelector('body'),
};

const { burgerBtnEl, burgerEl, backdropEl, mobMenuEl, bodyEl } = refs;

const toggleMobMenu = () => {
    burgerEl.classList.toggle('open');
    backdropEl.classList.toggle('mob-menu__backdrop--is-hidden');
    mobMenuEl.classList.toggle('mob-menu__container--is-hidden');
    bodyEl.classList.toggle('scroll-lock');
};

const closeMobMenu = () => {
    burgerEl.classList.remove('open');
    backdropEl.classList.add('mob-menu__backdrop--is-hidden');
    mobMenuEl.classList.add('mob-menu__container--is-hidden');
    bodyEl.classList.remove('scroll-lock');
};

const backdropClick = e => {
    if (e.currentTarget === e.target) {
        closeMobMenu();
    }
};

burgerBtnEl.addEventListener('click', toggleMobMenu);
backdropEl.addEventListener('click', backdropClick);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMobMenu();
});
