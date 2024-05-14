import React, { useState, useEffect } from 'react';
import './main.css';
import SideMenu from '../../components/sideMenu/SideMenu';
import Header from '../header/Header';
import Home from '../home/Home';

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handelToggleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
    fetch('http://localhost:3000/api/gamesData.json')
      .then(res => res.json())
      .then(data => {
        setGames(data);
      })
      .catch(e => console.log(e.message));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggelActive={handelToggleActive} />
        <div className="container-fliud">
          <Home games={games} />
        </div>
      </div>
    </main>
  );
}

export default Main;