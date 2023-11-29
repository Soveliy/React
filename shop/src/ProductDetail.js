// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productsList from './CatalogData';
const ProductDetail = ({ productsList }) => {
  
  const { id } = useParams();

  // Дополнительная проверка на наличие productsList
  if (!productsList || productsList.length === 0) {
    return <div>Список товаров пуст</div>;
  }

  const product = productsList.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image[0]} alt={product.name} />
      <p>{product.description || 'Описание отсутствует'}</p>
      <p>Цена: {product.price}</p>
      {/* Другие детали товара */}
    </div>
  );
};

export default ProductDetail;