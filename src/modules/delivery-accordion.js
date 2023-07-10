const refs = {
    accordion: document.querySelector('.delivery__item'),
    accordionBox: document.querySelector('.delivery__content'),
    accordionText: document.querySelector('.delivery__text'),
};

const { accordion, accordionBox, accordionText } = refs;

const accordionToggle = () => {
    accordionBox.classList.toggle('delivery__content--is-hidden');
    accordionText.classList.toggle('delivery__text--is-hidden');
};

accordion.addEventListener('click', accordionToggle);
