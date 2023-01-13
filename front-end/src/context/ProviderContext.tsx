import React, { useState, useMemo, ReactNode } from 'react';
import ContextComponents from "./ContextComponents";

interface IProps {
    children: ReactNode;
}

export default function ProviderComponents({ children }:IProps) {

    

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkEnable, setCheckEnable] = useState(true)



    const contextComponents = {
        username, setUsername,
        password, setPassword,
        checkEnable, setCheckEnable
    }

    return (
        <ContextComponents.Provider value={ {contextComponents
            // login:{
            //     email: '',
            //     password: '',
            // }
        } }>
          { children }
        </ContextComponents.Provider>
      );
}