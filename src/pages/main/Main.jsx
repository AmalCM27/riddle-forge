import React, { useState } from 'react';
import './main.css';
import SideMenu from '../../components/sideMenu/SideMenu';
import Header from '../header/Header';

function Main() {
  const [active, setActive] = useState(false);

  const handelToggleActive = () => {
    setActive(!active);
  }
  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggelActive={handelToggleActive} />
      </div>
    </main>
  );
}

export default Main;