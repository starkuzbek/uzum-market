import React from 'react'
import"./Footer.css"

function Footer() {
  return (
    <div className='container footer'>

      <div className="footer-top">
        <div className="fotOne">
          <li className='fot-fir'>Biz haqimizda</li>
          <li>Topshirish punktlari</li>
          <li>Vakansiyalar</li>
        </div>
        <div className="fotOne">
          <li className='fot-fir'>Foydalanuvchilarga</li>
          <li>Biz bilan bog'lanish</li>
          <li>Savol-Javob</li>
        </div>
        <div className="fotOne">
          <li className='fot-fir'>Tadbirkorlarga</li>
          <li>Uzumda soting</li>
          <li>Sotuvchi kabinetiga kiring</li>
        </div>
        <div className="fotOne">
          <div className="app-fot">
          <li className='fot-fir'>Ilovani yuklab olish</li>
          <img src="https://logowik.com/content/uploads/images/bw-google-play-and-app-store-button8473.logowik.com.webp" alt="" />
          </div>
          <div className="soc-fot">
            <li>Uzum ijtimoiy tarmoqlarda</li>
            <div className="soc-fot-img">
            <img src="https://freelogopng.com/images/all_img/1658588965instagram-logo-png-transparent-background.png" alt="" />
            <img src="https://www.freepnglogos.com/uploads/telegram-logo-4.png" alt="" />
            <img src="https://freelogopng.com/images/all_img/1656501465youtube-png.png" alt="" />
            <img src="https://rachelgraham.ie/wp-content/uploads/2021/11/facebook-transparent-logo-png-0.png" alt="" />
            </div>
          </div>
        </div>
      </div> <br />
      <hr />

      <div className="footer-bottom">
      <div className="fot-bot-text-one">
        <p>Maxfiylik kelishuvi</p>
        <p>Foydalanuvchi kelishuvi</p>
      </div>
      <div className="fot-bot-text-two">
        <p>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
      </div>
      </div>

    </div>
  )
}

export default Footer