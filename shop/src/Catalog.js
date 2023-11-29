import React,{ useState }  from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import productsList from './CatalogData';
export default function Catalog() {
  
    const itemsPerPage = 3; // Количество товаров на странице
    const [currentPage, setPage] = useState(1);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = productsList.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (pageNumber) => {
      setPage(pageNumber);
    };
  return (
    
    <div className='Catalog'>
      <div className="Catalog__row">
        {currentProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
             <ProductCard  product={product} />
          </Link>
       

        ))}
      </div>
      <div className="Pagination">
        {Array.from(
            { length: Math.ceil(productsList.length / itemsPerPage) }
            , (_, index) => (
            <button key={index + 1} onClick={() => setPage(index + 1)}>
                {index + 1}
            </button>
        ))}
      </div>
    </div>
    
  )
}
