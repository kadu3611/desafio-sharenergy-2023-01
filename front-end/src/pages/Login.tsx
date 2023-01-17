import React, { useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContextComponents from '../context/ContextComponents';
import '../styles/global.css'


const Login: React.FC = () => {

  const { contextComponents } = useContext(ContextComponents);
  const { username, password, setUsername, setPassword,
     checkEnable, setCheckEnable } = contextComponents

  let disableButton = !(username === 'desafiosharenergy' && password === 'sh@r3n3rgy');

  const handleInput = (event: any):void => {
    const { target } = event
    const { value, name } = target
    if (name === 'username') {
      setUsername(value)

    } else {
      setPassword(value)
    }
  }

  const funcRemember = useCallback(() => {
    const user = {
      username,
      password
    }
    if(checkEnable){
      localStorage.setItem("user", JSON.stringify(user));
    }else{
      localStorage.removeItem("user")
    }
    setCheckEnable(!checkEnable);

  },[checkEnable,password,setCheckEnable,username])

  const getLocalStorage = useCallback(():void => {

    const getLocal:string | null | object = localStorage.getItem('user')
    let getJson:{
      username: '',
      password:''
    } | string = ''
    if (typeof getLocal === 'string') {
      getJson = JSON.parse(getLocal);
      const getObject = Object(getJson)
      const { username, password } = getObject
      setPassword(password)
      setUsername(username)
      setCheckEnable(false)
    }

  },[setPassword,setUsername, setCheckEnable])

  useEffect(() => {
    getLocalStorage()
  },[getLocalStorage])


  return (
    <div className="App-body">
      <div id="padding-body">
      <label id="padding-label">
        Username:
        <input
        id='padding-input'
          name="username"
          type="text"
          onChange={handleInput}
          value={username.length > 0 ? username : ''}
        />
      </label>
      </div>
      <div id="padding-body">
      <label id="padding-label">
        Password:
        <input
        id='padding-input'
          name="password"
          type="password"
          onChange={handleInput}
          value={password.length > 0 ? password : ''}
        />
      </label>
      </div>
      <div>
      <label
      id='label-size'
      >
        Remember me
        <input
        type={"checkbox"}
        checked={!checkEnable}
        onChange={() => funcRemember()}
        disabled={disableButton}
        ></input>
      </label>
      </div>
      <div
      id='div-button'
      >
      <Link to="/userlist">
        <button
        id='button-size'
        type="button"
        disabled={disableButton}
        >
          Log
        </button>
        </Link>

      </div>

    </div>
  );
}

export default Login;
