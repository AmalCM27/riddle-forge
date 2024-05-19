import React from 'react'
import './bag.css'

function Bag({ games, reference }) {
  return (
    <section id="bag" className='bag' ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Bag</h1>
        </div>
        {
          games.length === 0 ? (
            <h2>Your Bag is empty</h2>
          ) : (
            <>
            <div className="row">
              <div className="table-responsvie">
                
              </div>
            </div>
            </>
          )
        }
      </div>
    </section>
  )
}

export default Bag