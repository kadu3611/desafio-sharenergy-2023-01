import { createContext } from 'react';


interface ContextInterface {
    contextComponents: {
        username:string,
        setUsername:React.Dispatch<React.SetStateAction<string>>,
        password:string,
        setPassword:React.Dispatch<React.SetStateAction<string>>,
        checkEnable: boolean,
        setCheckEnable: React.Dispatch<React.SetStateAction<boolean>>
    },
}

const ContextComponents = createContext<ContextInterface>({} as ContextInterface);

export default ContextComponents;
