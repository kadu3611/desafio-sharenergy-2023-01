import React, { useEffect, useState } from 'react';
import { getallClient, controllerBoolean, newClient,
     upClient, viewClient, deleteClientId, listClients} from '../components/FunctionsClients'
import NavBar from '../components/NavBar';


const Clients: React.FC = () => {

    const arrayInput = ["Nome", "Email", "Telefone", "Endereço", "CPF"];
    const [registerBoolean, setRegisterBoolean] = useState(false);
    const [updateBoolean, setUpdateBoolean] = useState(false);
    const [viewBoolean, setViewrBoolean] = useState(false);
    const [deleteBoolean, setDeleteBoolean] = useState(false);
    const [fetch, setFetch] = useState([]);
    const [registerDates, setRegisterDates] = useState({
        Nome: '',
        Email: '',
        Telefone: 0,
        Endereço: '',
        CPF: 0
    });
    const [searchUsername, setSearchUsername] = useState('');
    const [dateClientBoolean, setDateClientBoolean] = useState(false);
    const [dateDom, setDateDom] = useState(<div></div>);
  
    const handleInput = (event: any): void => {
        const { target } = event
        const { value, name } = target
        if (name === "view" || name === "delete" || name === "update") {
            setSearchUsername(value)
        }

    }

    const handleInputRegister = (event: any): void => {
        const { target } = event
        const { value, name } = target
        const allValues = { ...registerDates, [name]: value }
        setRegisterDates(allValues)
    }
   

    const buttonBoolean = (text: string, setState:React.Dispatch<React.SetStateAction<boolean>>,
        state:boolean) => (
        <div>
            <button
                name={text}
                type="button"
                onClick={() => controllerBoolean(setState, state)}
            >
                {text}
            </button>
        </div>
    )

    const divRegister = (setState:React.Dispatch<React.SetStateAction<boolean>>,
        state:boolean) => (
       <div>
           {
               arrayInput.map((item: string, index: number) => (
                   <div
                       key={index}
                   >
                       <label>
                           {item}
                           <input
                               name={item}
                               type={item === "Telefone" || item === "CPF"
                                   ?
                                   "number" : "text"}
                               onChange={handleInputRegister}
                           />
                       </label>
                   </div>
               ))
           }
           <div>
               <button
                   type="button"
                   onClick={() => newClient(registerDates, setFetch)}
               >
                   Save
               </button>
               <button
                   type="button"
                   onClick={() => controllerBoolean(setState, state)}
               >
                   Closed register
               </button>
           </div>
       </div>
    );

    const divSearch = (text: string, setState:React.Dispatch<React.SetStateAction<boolean>>,
        state:boolean) => (
            
        <div>
            {
            dateDom.props.children 
            ?
            dateDom 
            :
            <div>
            <label>
                id:
                <input
                    type="text"
                    name={text}
                    onChange={handleInput}
                />
            </label>
            <button
                type="button"
                onClick={() => {
                    if(text === "view"){ viewClient(searchUsername, 
                        setDateClientBoolean, dateClientBoolean, setDateDom)
                    }
                    else{
                        deleteClientId(searchUsername, setFetch)
                    }
                }}
            >
                {
                    text === "view" ? "Search" : "Delete"
                }
            </button>
            </div>
}
            <button
                type="button"
                onClick={() => controllerBoolean(setState, state)}
            >
                Closed register
            </button>
        </div>
    )

    const InputsUpdate = (text:string, setState:React.Dispatch<React.SetStateAction<boolean>>,
        state:boolean) =>(
        <div>
            <label>
                id:
                <input
                    type="text"
                    name={text}
                    onChange={handleInput}
                />
            </label>
            {
                arrayInput.map((item: string, index: number) => (
                    <div
                        key={index}
                    >
                        <label>
                            {item}
                            <input
                                name={item}
                                type={item === "Telefone" || item === "CPF"
                                    ?
                                    "number" : "text"}
                                onChange={handleInput}
                            />
                        </label>
                    </div>
                ))
            }
            <div>
            <button
                type="button"
                onClick={() => upClient(registerDates, searchUsername, setFetch)}
            >
                Save
            </button>
            <button
                type="button"
                onClick={() => controllerBoolean(setState, state)}
            >
                Closed register
            </button>
            </div>
        </div>
        )


    useEffect(() => {
        getallClient(setFetch)
    }, []);

    return (
        <div>
            <NavBar/>
            {listClients(fetch)}
            {
                registerBoolean ?
                    divRegister(setRegisterBoolean, registerBoolean)
                    :
                    buttonBoolean("Register Client", setRegisterBoolean, registerBoolean)
            }
            {
                updateBoolean ?
                    InputsUpdate("update", setUpdateBoolean, updateBoolean)
                    :
                    buttonBoolean("Update Client", setUpdateBoolean, updateBoolean)
            }
            {
                viewBoolean ?
                    divSearch("view", setViewrBoolean, viewBoolean)
                    :
                    buttonBoolean("View information", setViewrBoolean, viewBoolean)
            }
            {
                deleteBoolean ?
                    divSearch("delete", setDeleteBoolean, deleteBoolean)
                    :
                    buttonBoolean("Delete Client", setDeleteBoolean, deleteBoolean)
            }
        </div>
    );
}
export default Clients;
