import React, { useEffect, useState } from 'react'

import SingleProduct from './SingleProduct';
import axios from 'axios';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(data => setProducts(data.data))
  }, [])

  return (
    <>
      {!products.length ? (
        <h2 className='text-center p-3 my-3 text-red'>Loading...</h2>
      ): (
        products.map((product) => {
          return <SingleProduct product={product} key={product.id}/>
        })
      ) }
    </>
  )
}

export default ProductList
