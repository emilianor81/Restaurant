import React from 'react';
import NavBar from '../Navbar/Navbar';
import './About.css'

export default function Information() {
  return (
      <div>
          <NavBar/>
    <div className='AboutContainer'>
      <h3 id='h3'>The Restaurant App</h3>
      <hr/>
      <div className='AboutInfo'>
      <h6 id='h6'>Restaurant app created with React, Redux, Express, Sequelize and PostgreSQL.</h6>
      <p>On the homepage you'll have several restaurants and can search any of them by name 
        and it will show some results with some information about the restaurants.</p>
      <p>Every card has a "reservar" button that will show you a new page 
     where you can make a new reservation for the restaurant.</p>
      </div>
      <p id='santi'> <a target='blank' className='Link' href="https://www.linkedin.com/in/ing-emiliano-rodriguez/">Emiliano Rodriguez </a> and <a target='blank' className='Link' href="https://www.linkedin.com/in/santiago-soares-gache/">Santiago Soares Gache</a> project</p>
    </div></div>
  )
}