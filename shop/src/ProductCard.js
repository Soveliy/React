import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="catalog__item-container">
            <div className="catalog-item">
                <div className="catalog-item__image">
                    <img src={ product.image } alt="" />
                </div>
                <a href="#" className="catalog-item__title">{ product.name }</a>
                <div className="catalog-item__price">{ product.price }</div>
                <button className="catalog-item__button">В корзину</button>
            </div>
    </div>
    );
}

export default ProductCard;
