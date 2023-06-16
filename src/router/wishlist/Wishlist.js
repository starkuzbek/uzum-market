import React from 'react'
import "./Wishlist.css"
import heartsimg from "../../assets/hearts/hearts.webp"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductWrapper from '../../component/product-wrapper/ProductWrapper'

function Wishlist() {
  const heart = useSelector(s => s.heart.value)
  console.log(heart);
  return (
    <div className='container'>
      {
        heart.length ? 
        <ProductWrapper data={heart}/>
        :
        <div className="wishlist">
        <img src={heartsimg} alt="" />
        <h2>Sizga yoqqanini qoʻshing</h2>
        <p>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
          <Link to={"/login"}>
        <button>Akkountga kirish</button>
          </Link>
        </div>
      }
     
    </div>
  )
}

export default Wishlist