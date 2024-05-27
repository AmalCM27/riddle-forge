import React from 'react'
import './contacts.css'

function Contacts({reference}) {
  return (
    <section id="contact" className='contact'  ref={reference} >
    <div className="container-fluid">
      <div className="row mb-3">
        <h1>Contacts</h1>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus labore, aut error quo autem sapiente consequuntur quasi sit quidem minus soluta illum veritatis sed unde laborum corrupti nobis adipisci.</p>
    </div>
  </section>
  )
}

export default Contacts