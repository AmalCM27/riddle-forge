import React, { useState, useEffect, useRef } from 'react';
import './main.css';
import SideMenu from '../../components/sideMenu/SideMenu';
import Header from '../header/Header';
import Home from '../home/Home';
import Categories from '../categories/Categories';
import MyLibrary from '../myLibrary/MyLibrary';
import Bag from '../bag/Bag';

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagref = useRef();

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false,
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false,
    },
    {
      name: 'bag',
      ref: bagref,
      active: false,
    },
  ];


  const handelToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active');
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section;
    });
  }

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
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggelActive={handelToggleActive} />
        <div className="container-fluid">
          <Home games={games} reference={homeRef} />
          <Categories games={games} reference={categoriesRef} />
          <MyLibrary games={games} reference={libraryRef} />
          <Bag games={games} reference={bagref} />
        </div>
      </div>
    </main>
  );
}

export default Main;