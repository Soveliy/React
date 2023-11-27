import React from 'react'
import ProductCard from './ProductCard'
export default function Catalog() {
    const productsList = [
        {
            id: 1,
            name: "Prod1",
            image:{
                0:"src.png",
                1:"src2.png"
            },
            price: "19.99"
        },
        {
            id: 2,
            name: "Prod2",
            image: "   ",
            price: "19.99"
        },
        {
            id: 3,
            name: "Prod3",
            image: "   ",
            price: "19.99"
        },
        {
            id: 4,
            name: "Prod4",
            image: "   ",
            price: "19.99"
        },
        {
            id: 5,
            name: "Prod5",
            image: "   ",
            price: "19.99"
        },
        {
            id: 6,
            name: "Prod6",
            image: "   ",
            price: "19.99"
        },
    ]

  return (
    
   <div className='Catalog'>
        <div className="Catalog__row">
           {productsList.map(product => (
            <ProductCard key={product.id} product={product}/>
           ))}
        </div>
   </div>
    
  )
}
