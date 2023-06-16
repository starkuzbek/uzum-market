import React from 'react'
import  "./Home.css"
import Slider from '../../component/slider/Slider'
import Products from '../../component/products/Products'
function Home() {
  return (
    <div>
      <Slider/>
      <Products/>
    </div>
  )
}

export default Home