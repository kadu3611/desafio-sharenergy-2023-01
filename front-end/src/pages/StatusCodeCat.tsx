import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';

interface History {
    location: {
        pathname: string,
    }

}


const StatusCodeCat: React.FC = () => {
  const history: History = createBrowserHistory();
  const numberHistory = history.location.pathname.split('/')[2]

const [apiCat, setApiCat] = useState('')


const submitApi = async() => {
    try{
    setApiCat(`https://http.cat/${numberHistory}`)
    }catch (e) {
        setApiCat('erro')
        console.log(e);
    }

}


useEffect(() => {
    submitApi()
})

  return (
   
    <div>
    <img
    src={apiCat}
    alt="imagem"
/>
<Link to="/userlist/randomDogs">
<button
type="button"
>
Go Dogs!
</button>
</Link>

</div>
  );
}

export default StatusCodeCat;