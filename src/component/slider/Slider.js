import React from 'react'
import "./Slider.css"
import bg1 from "../../assets/slider/bg1.jpg"
import bg2 from "../../assets/slider/bg2.jpg"
import bg3 from "../../assets/slider/bg3.jpg"
import bg4 from "../../assets/slider/bg4.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Slider() {
  return (
    <div className='container'>
        <div className="slider__container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            <SwiperSlide><img src={bg1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={bg2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={bg3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={bg4} alt="" /></SwiperSlide>
           
          </Swiper>
        </div>
    </div>
  )
}

export default Slider