import React, {  useCallback, useContext, useEffect, useState } from 'react';
import CardUser from '../components/CardUser';
import ContextComponents from '../context/ContextComponents';

function RandomUserGeneration() {

    // const { contextComponents } = useContext(ContextComponents);
    // const { username, password, setUsername, setPassword,
    //     checkEnable, setCheckEnable } = contextComponents
    const [ arrayApi, setArrayApi ] = useState([])
    const [ filterApi, setFilterApi ] = useState([])


    const apiUser =  useCallback(async() => {
        try {
            const response =
                await fetch('https://randomuser.me/api/?page=3&results=4');
            const data = await response.json();
            console.log(data.results, 'data');
            setArrayApi(data.results)   
            
        } catch (e) {
            console.log(e);
        }
    }, [])

    const getFilter = (event:any):void => {
        const { target } = event
        const { value } = target
        const arrayCloneApi = arrayApi
        const arrayFilter = arrayCloneApi
        // .filter((elemento) => elemento.includes(value))
    }


    useEffect(() => {
        apiUser()
    },[apiUser])

    
    return (
        <div>
            <input type="text"
            onChange={getFilter}
            />
            <CardUser
            items = {arrayApi}
            />

        </div>
    );
}

export default RandomUserGeneration;
