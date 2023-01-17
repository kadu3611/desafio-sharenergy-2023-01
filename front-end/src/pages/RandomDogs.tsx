import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/dogsRandom.css'

const RandomDogs: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <div
      className='dog-all'
      >
      <iframe
        src="https://random.dog/"
        title="Dog"
        width={"98%"}
        height={"600px"}
      >
      </iframe>
      <div
      className='dog-container-buttons'
      >
        <div
        className='div-buttons'
        >
      <button
      className='button-dog'
        type="button"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
      </div>
      <div
        className='div-buttons'
      >
      <Link
        to="/userlist/clients"
      >
        <button
      className='button-dog'

          type="button"
        >
          Clients
        </button>
      </Link>
      </div>
      </div>
      </div>

    </div>
  );
}

export default RandomDogs
  ;