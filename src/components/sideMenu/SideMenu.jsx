import React, { useState } from 'react'
import './sideMenu.css'
import navListData from '../../data/NavListData'
import NavList from '../NavListItem/NavListItem'


function SideMenu({active}) {
  const [navData ] = useState(navListData)
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <Link to="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </Link>
      <ul className="nav">

        {navData.map(item => (
          <NavList key={item._id} item={item} />
        ))}

      </ul>

      <ul className="social">
        <li>
          <Link to="#">
            <i className="bi bi-meta"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="bi bi-twitter-x"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="bi bi-youtube"></i>
          </Link>
        </li>
        <li>
          <Link to="#" className="share">
            <i className="bi bi-share"></i>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default SideMenu