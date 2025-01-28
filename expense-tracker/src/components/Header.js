import React from 'react'
import Logo from '../Asset/img/img2.jpeg'

function Header() {
  return (
    <div className='header'>
      <img src={Logo}/>
      <h2>Expense Tracker</h2>
    </div>
  )
}

export default Header