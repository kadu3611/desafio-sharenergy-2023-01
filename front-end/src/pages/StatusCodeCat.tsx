import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import '../styles/catsRandom.css'

interface History {
  location: {
    pathname: string,
  }

}


const StatusCodeCat: React.FC = () => {
  const history: History = createBrowserHistory();
  const numberHistory = history.location.pathname.split('/')[2]

  const [apiCat, setApiCat] = useState('')


  const submitApi = async () => {
    try {
      setApiCat(`https://http.cat/${numberHistory}`)
    } catch (e) {
      setApiCat('erro')
      console.log(e);
    }

  }

  useEffect(() => {
    submitApi()
  })

  return (

    apiCat.length < 0 ?
      <Loading />
      :
      <div>
        <NavBar />
        <div
        className='cats-all'
        >
        <div
        id='cat-div-img'
        >
          <img
          id='cat-img'
            src={apiCat}
            alt="imagem"
          />
        </div>
        <div>
          <Link to="/userlist/randomDogs">
            <button
              type="button"
              id='cat-button'
            >
              Go Dogs!
            </button>
          </Link>
        </div>
        </div>
      </div>
  );
}

export default StatusCodeCat;