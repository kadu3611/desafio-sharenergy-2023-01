import React, { useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContextComponents from '../context/ContextComponents';

function Login() {

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
    <div>
      <label
      >
        Username
        <input
          name="username"
          type="text"
          onChange={handleInput}
          value={username.length > 0 ? username : ''}
        />
      </label>
      <label
      >
        Password
        <input
          name="password"
          type="password"
          onChange={handleInput}
          value={password.length > 0 ? password : ''}
        />
      </label>
      <label htmlFor="remember">
        Remember me
        <input
        type={"checkbox"}
        checked={!checkEnable}
        onChange={() => funcRemember()}
        disabled={disableButton}

        ></input>
      </label>
      <div>
      <Link to="/userlist">
        <button
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
