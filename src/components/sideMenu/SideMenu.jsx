import React, { useState } from 'react'
import './sideMenu.css'
import navListData from '../../data/NavListDaat'
import NavList from '../NavListItem/NavListItem'


function SideMenu() {
  const [navData, setNav] = useState(navListData)
  return (
    <div className='sideMenu'>
      <a href="#" className="logo">
        <i class="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">

        {navData.map(item => (
          <NavList key={item._id} item={item}/>
        ))}

      </ul>
    </div>
  )
}

export default SideMenu