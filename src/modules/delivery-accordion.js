const refs = {
    accordion: document.querySelectorAll('.delivery__subheading-wrapper'),
    accordionArrow: document.querySelectorAll('.delivery__accordion-arrow'),
    accordionBox: document.querySelectorAll('.delivery__content'),
    accordionText: document.querySelectorAll('.delivery__text'),
};

const { accordion, accordionArrow, accordionBox, accordionText } = refs;

for (let i = 0; i < accordion.length; i += 1) {
    accordion[i].addEventListener('click', () => {
        accordionArrow[i].classList.toggle('is-opened');
        accordionBox[i].classList.toggle('delivery__content--is-hidden');
        accordionText[i].classList.toggle('delivery__text--is-hidden');
    });
}
