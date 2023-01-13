import React, { useCallback, useContext, useEffect } from 'react';
import ContextComponents from '../context/ContextComponents';

function RandomUserGeneration() {

  const { contextComponents } = useContext(ContextComponents);
  const { username, password, setUsername, setPassword,
     checkEnable, setCheckEnable } = contextComponents


  return (
    <div>
      RandomUserGeneration

    </div>
  );
}

export default RandomUserGeneration;
