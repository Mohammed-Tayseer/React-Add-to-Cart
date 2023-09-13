import React from 'react'
import ProductList from '../../Components/Product/ProductList'
import MainTitle from '../../Components/MainTitle/MainTitle'

const Products = () => {


  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <MainTitle title='Products Page'/>
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default Products
