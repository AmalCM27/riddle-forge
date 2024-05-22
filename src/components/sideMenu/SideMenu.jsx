import React, { useState } from 'react'
import './sideMenu.css'
import navListData from '../../data/NavListData'
import NavList from '../NavListItem/NavListItem'
import PlayGame from './controller.gif'

function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="#!" className="logo">
        <img src={PlayGame} alt="" />
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map(item => (
          <NavList
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>
      <ul className="social">
        <li>
          <a href="#!">
            <i className="bi bi-telegram"></i>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#!" className="share">
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>

    </div>
  )
}

export default SideMenu