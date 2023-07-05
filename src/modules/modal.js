const refs = {
    orderBtnEl: document.querySelector('.order-btn'),
    backdropEl: document.querySelector('.modal__backdrop'),
    modalEl: document.querySelector('.modal__container'),
    closeBtnEl: document.querySelector('.modal__close-btn'),
    bodyEl: document.querySelector('body'),
};

const { orderBtnEl, backdropEl, modalEl, closeBtnEl, bodyEl } = refs;

const openModal = () => {
    backdropEl.classList.remove('modal__backdrop--is-hidden');
    modalEl.classList.remove('modal__container--is-hidden');
    window.addEventListener('keydown', escClick);
};

const closeModal = () => {
    backdropEl.classList.add('modal__backdrop--is-hidden');
    modalEl.classList.add('modal__container--is-hidden');
    window.removeEventListener('keydown', escClick);
    orderBtnEl.blur();
};

const backdropClick = e => {
    if (e.currentTarget === e.target) {
        closeModal();
    }
};

const escClick = e => {
    if (e.code === 'Escape') {
        closeModal();
    }
};

orderBtnEl.addEventListener('click', openModal);
closeBtnEl.addEventListener('click', closeModal);
backdropEl.addEventListener('click', backdropClick);
