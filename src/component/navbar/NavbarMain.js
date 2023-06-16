import React from 'react'
import {AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineHome} from "react-icons/ai"
import { Link } from 'react-router-dom'

function NavbarMain() {
  return (
    <div className='container navbar__main'>
      <Link to={"/"}>
      <h2 className="nav__logo">uzum market</h2>
      </Link>
      <button className='nav__btn'> 
        <AiOutlineMenu/>
        <span>Katalog</span>
      </button>
      <div className="nav__search">
        <input type="text" placeholder='Qidirish...' />
        <button><AiOutlineSearch/></button>
      </div>
      <ul className="nav__collection">
        <li className="nav__item">
          <AiOutlineHome/>
          <span>Bosh sahifa</span>
        </li>
        <li className="nav__item">
          <AiOutlineUser/>
          <Link to={"/login"}>
          <span>Kirish</span>
          </Link>
        </li>
        <li className="nav__item">
          <AiOutlineHeart/>
          <Link to={"/wishlist"}>
          <span>Saralangan</span>
          </Link>
        </li>
        <li className="nav__item">
          <AiOutlineShoppingCart/>
          <Link to={"/cart"}>
          <span>Savatcha</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarMain