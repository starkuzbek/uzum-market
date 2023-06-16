import React from 'react'
import "./Products.css"
import Skeleton from '../skeleton/Skeleton'
import { PRODUCTS } from "../../static/index"
import ProductWrapper from '../product-wrapper/ProductWrapper'


function Products() {
  return (
    <div className='container'>
      <ProductWrapper data={PRODUCTS}/>
       
        <Skeleton/>
    </div>
  )
}

export default Products