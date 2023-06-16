import React from 'react'
import "./Cart.css"
import shopocat from "../../assets/hearts/shopocat.webp"
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className='container'>
      <div className="cart">
      <img src={shopocat} alt="" />
      <h2>Savatda hozircha mahsulot yoʻq</h2>
      <p>Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping</p>
        <Link to={"/"}>
      <button>Bosh sahifa</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart