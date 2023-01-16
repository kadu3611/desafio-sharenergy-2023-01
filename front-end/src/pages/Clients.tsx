import React, { useCallback, useEffect, useState } from 'react';
import { getAll, registerUser, updatUser,
     findById, deleteClient } from '../helpers/ApiConnect';
import { getallClient, controllerBoolean, newClient,
     upClient, viewClient} from '../components/FunctionsClients'

interface Client {
    _id: string,
    cpf: number,
    email: string,
    endereço: string,
    nome: string,
    telefone: string,
}


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

    console.log(dateDom, 'dateClientBoolean');
    


    const listClients = (
        fetch.map((item: Client, index: number) => (
            <div
                key={index}
            >
                <div>
                    <div>
                        Id: {item._id}
                    </div>
                    <div>
                        Nome: {item.nome}
                    </div>
                    <div>
                        Email: {item.email}
                    </div>
                    <div>
                        Telefone: {item.telefone}
                    </div>
                    <div>
                        Endereço: {item.endereço}
                    </div>
                    <div>
                        CPF: {item.cpf}
                    </div>
                </div>
            </div>

        ))
    )

    // const getallClient = useCallback(async () => {
    //     const getClients = await getAll();
    //     setFetch(getClients)
    // }, [])

    // const controllerBoolean = (text: string): void => {
    //     if (text === "Register Client") setRegisterBoolean(!registerBoolean);
    //     else if (text === "Update Client") setUpdateBoolean(!updateBoolean);
    //     else if (text === "View information") setViewrBoolean(!viewBoolean);
    //     else if (text === "Delete Client") setDeleteBoolean(!deleteBoolean);

    // }

    const handleInput = (event: any): void => {
        const { target } = event
        const { value, name } = target
        if (name === "view" || name === "delete" || name === "update") {
            setSearchUsername(value)
        }
        const allValues = { ...registerDates, [name]: value }
        setRegisterDates(allValues)
    }

    // const newClient = async () => {
    //     const { Nome, Email, Telefone, Endereço, CPF } = registerDates
    //     await registerUser(Nome, Email, Telefone, Endereço, CPF)
    //     getallClient(setFetch)
    // }

    // const upClient = async () => {
    //     const { Nome, Email, Telefone, Endereço, CPF } = registerDates
    //     await updatUser(searchUsername, Nome, Email,
    //         Telefone, Endereço, CPF)
    //     getallClient(setFetch)
    // }

    // const viewClient = async () => {
    //     const allDetailsClient = await findById(searchUsername)
    //     console.log(allDetailsClient);
        
    // }

    const deleteClientId = async () => {
        await deleteClient(searchUsername)
        getallClient(setFetch)
        
    }

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
                                onChange={handleInput}
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

    const divSearch = (text: string, setState:React.Dispatch<React.SetStateAction<boolean>>,
        state:boolean) => (
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
                        deleteClientId()
                    }
                }}
            >
                {
                    text === "view" ? "Search" : "Delete"
                }
            </button>
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
            {listClients}
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
                (
                    dateClientBoolean ? dateDom : 
                    divSearch("view", setViewrBoolean, viewBoolean)
                    )
                    
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
