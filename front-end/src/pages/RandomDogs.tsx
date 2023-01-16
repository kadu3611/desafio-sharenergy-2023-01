import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RandomDogs: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <iframe
        src="https://random.dog/"
        title="Dog"
        width={"98%"}
        height={"600px"}
      >
      </iframe>
      <button
        type="button"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
      <Link
        to="/userlist/clients"
      >
        <button
          type="button"
        >
          Clients
        </button>
      </Link>
    </div>
  );
}

export default RandomDogs
  ;