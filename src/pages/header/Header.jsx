import React, { useContext } from 'react'
import './header.css'
import { AppContext } from '../../App'
import userImg from '../../images/avatar.jpg'

function Header({ toggelActive }) {

  const {library, bag} = useContext(AppContext)

  return (
    <header>
      <a href="javascript:void(0)" className="menu" onClick={toggelActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="javascript:void(0)" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="javascript:void(0)" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag"> {bag.length} </span>
        </a>
        <div className="avatar">
          <a href="javascript:void(0)">
            <img src={userImg} alt={game.title} />
          </a>
          <div className="user">
            <span>Amal_Cool</span>
            <a href="javascript:void(0)">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header