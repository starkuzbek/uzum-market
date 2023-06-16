import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';


  
function Login() {





  
  return (
    <div className='container'>
      <div className="login">
        <div className="main_login">
        <div className="login__tel">
       <h2>Telefon raqamini kiriting</h2>
        <p>Tasdiqlash kodini SMS orqali yuboramiz</p>
       <div className="login__input"><label htmlFor="input">+998</label> <input type="text" id="phone"/>
       </div> <br />
        <button className='login_send-kod'>Kodni olish</button> <br />
        <button className='login_parol'>Parol bilan kirish</button> <br />
        <Link className='login__back-btn' to={"/"}> 
        <button className='login_back'>Asosiy sahifa</button>
        </Link>
        <h3>Avtotizatsiyadan o'tish orqali siz <font> shaxsiy <br /> ma'lumotlarni qayta ishlash siyosatiga rozilik <br /> bildirasiz</font></h3>
       </div>
        </div>



      </div>
    </div>
  )
}

export default Login