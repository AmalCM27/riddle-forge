import React, { useState, useEffect } from 'react';
import './categories.css';
import filtersListData from '../../data/filtersListData';
import GameCard from '../../components/gameCard/GameCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Categories({ games, reference }) {
  const [data, setData] = useState(games);
  const [filters, setFilters] = useState(filtersListData);
  const [text, setText] = useState('');
  const [showNoResults, setShowNoResults] = useState(false);

  const handleFilterGames = category => {
    setFilters(filters.map(filter => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter;
    }));

    const filteredGames = category === 'All' ? games : games.filter(game => game.category === category);
    setData(filteredGames);
    setShowNoResults(filteredGames.length === 0);
  };

  const handleSearchGames = e => {
    const searchText = e.target.value.toLowerCase();
    const filteredGames = games.filter(game =>
      game.title.toLowerCase().includes(searchText)
    );
    setData(filteredGames);
    setText(searchText);
    setShowNoResults(filteredGames.length === 0);
  };

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map(filter => (
                <li key={filter._id}
                  className={`${filter.active ? 'active' : undefined}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                value={text}
                placeholder='Search'
                onChange={handleSearchGames}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <TransitionGroup className="game-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map(game => (
              <CSSTransition key={game._id} classNames="fade" timeout={300}>
                <GameCard game={game} />
              </CSSTransition>
            ))}
          </TransitionGroup>
          <CSSTransition
            in={showNoResults}
            timeout={1500}
            classNames={{
              enter: 'show',
              enterActive: 'show',
              exit: 'hide',
              exitActive: 'hide'
            }}
            unmountOnExit
          >
            <div className="no-results">
              No results found
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
}

export default Categories;
