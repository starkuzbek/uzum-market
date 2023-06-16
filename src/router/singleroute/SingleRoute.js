import React from 'react'
import "./SingleRoute.css"
import { useLocation } from 'react-router-dom'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"


function SingleRoute() {
  const { state } = useLocation()

  return (
    <div className='container'>
        <div className="single__route">
            
        <div className="single__img">
        <img src={state?.url} alt="" />
        </div>



          <div className="single__main">
          
          <div className="single__rating">
            <p className='single_baho'> <AiFillStar className='single_star'/> <font>5.0 ( 452 baho)</font>     <font>Ko'proq 8000 buyurtma</font></p>
            <p className='single_wish'> <AiOutlineHeart className='single_heart'/> Istaklarga </p>
          </div>

          <div className="single__product_name">
            <h2>{state?.title}</h2>
          </div>

          <div className="single__seller">
            <div className="single_sotuvchi">
              <h1>Sotuvchi:</h1>
              <h1>PepsiCo</h1>
            </div>
            <div className="single__diller">
              <h1>Yetazib berish:</h1>
              <p>1 kun, bepul</p>
            </div>
          </div> <hr />









          </div>





















        </div>
    </div>
  )
}

export default SingleRoute