import React from 'react';
import './main.css';
import SideMenu from '../../components/sideMenu/SideMenu';
import Header from '../header/Header';

function Main() {
  return (
    <main>
      <SideMenu />
      <div className="banner">
        <Header/>
      </div>
    </main>
  );
}

export default Main;