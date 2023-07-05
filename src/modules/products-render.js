import { products } from './products';

const productsList = document.querySelector('.products__list');

const createProductsMarkup = products => {
    const markup = products
        .map(({ name, image, price, weight }) => {
            return `
            <li class="products__item">
                <div class="products__img-box">
                    <img src=${image} alt=${name} class="products__img" width="220">
                    <div class="products__description">
                        <p class="products__description-text">
                            Дізнайтеся про цей товар більше у нашого консультанта.
                        </p>
                        <a href="https://t.me/MolfarMilkBot" class="products__description-link" target="_blank">
                            Натискайте!
                        </a>
                    </div>
                </div>
                <div class="products__text-box">
                    <h3 class="products__heading">${name}</h3>
                    <p class="products__price">${price}</p>
                    <p class="products__weight">${weight}</p>
                </div>
            </li>
        `;
        })
        .join('');

    return markup;
};

const renderProducts = (injectionTarget, markup) => {
    injectionTarget.insertAdjacentHTML('beforeend', markup);
};

renderProducts(productsList, createProductsMarkup(products));
