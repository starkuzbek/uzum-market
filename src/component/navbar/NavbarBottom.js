import React from 'react'


const DATA = [
  "Elektronika",
  "Maishiy texnika",
  "Kiyim",
  "Poyabzal",
  "Aksesuarlar",
  "Go'zallik",
  "Salomatlik",
  "Uy-qurilish mollari",
  "Avtotovarlar"
]

function NavbarBottom() {
  return (
    <div className='container'>
      <div className="nav__bottom-collection">
        {
          DATA?.map((item, inx)=>  <li key={inx} className='nav__bottom-item'>{item}</li> )
        }
       
      </div>
    </div>
  )
}

export default NavbarBottom