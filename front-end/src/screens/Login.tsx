import React, { useCallback, useContext } from 'react';
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


  const openNextPage = ():void => {
    console.log('ola');
    
  }


  return (
    <div>
      <label
      >
        Username
        <input
          name="username"
          type="text"
          onChange={handleInput}
        />
      </label>
      <label
      >
        Password
        <input
          name="password"
          type="password"
          onChange={handleInput}
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
        <button
        type="button"
        disabled={disableButton}
        onClick={() => openNextPage()}
        >
          Log
        </button>
      </div>

    </div>
  );
}

export default Login;
