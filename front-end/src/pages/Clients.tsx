import React, { useCallback, useEffect, useState } from 'react';
import { getAll, registerUser, updatUser,
     findById, deleteClient } from '../helpers/ApiConnect';

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

    const getallClient = useCallback(async () => {
        const getClients = await getAll();
        setFetch(getClients)
    }, [])

    const controllerBoolean = (text: string): void => {
        if (text === "Register Client") setRegisterBoolean(!registerBoolean);
        else if (text === "Update Client") setUpdateBoolean(!updateBoolean);
        else if (text === "View information") setViewrBoolean(!viewBoolean);
        else if (text === "Delete Client") setDeleteBoolean(!deleteBoolean);

    }

    const handleInput = (event: any): void => {
        const { target } = event
        const { value, name } = target
        if (name === "view" || name === "delete" || name === "update") {
            setSearchUsername(value)
        }
        const allValues = { ...registerDates, [name]: value }
        setRegisterDates(allValues)
    }

    const newClient = async () => {
        const { Nome, Email, Telefone, Endereço, CPF } = registerDates
        await registerUser(Nome, Email, Telefone, Endereço, CPF)
        getallClient()
    }

    const upClient = async () => {
        const { Nome, Email, Telefone, Endereço, CPF } = registerDates
        await updatUser(searchUsername, Nome, Email,
            Telefone, Endereço, CPF)
        getallClient()
    }

    const viewClient = async () => {
        const allDetailsClient = await findById(searchUsername)
        console.log(allDetailsClient);
        
    }

    const deleteClientId = async () => {
        await deleteClient(searchUsername)
        getallClient()
        
    }

    const divRegister = (type: string) => (
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
                    onClick={() => newClient()}
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => controllerBoolean(type)}
                >
                    Closed register
                </button>
            </div>
        </div>
    );

    const buttonBoolean = (text: string) => (
        <div>
            <button
                name={text}
                type="button"
                onClick={() => controllerBoolean(text)}
            >
                {text}
            </button>
        </div>
    )

    const divSearch = (text: string, type: string) => (
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
                    if(text === "view"){ viewClient()
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
                onClick={() => controllerBoolean(type)}
            >
                Closed register
            </button>
        </div>
    )

    const InputsUpdate = (text:string, type:string) =>(
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
                onClick={() => upClient()}
            >
                Save
            </button>
            <button
                type="button"
                onClick={() => controllerBoolean(type)}
            >
                Closed register
            </button>
            </div>
        </div>
        )


    useEffect(() => {

        getallClient()

    }, [getallClient]);

    return (
        <div>
            {listClients}
            {
                registerBoolean ?
                    divRegister("Register Client")
                    :
                    buttonBoolean("Register Client")
            }
            {
                updateBoolean ?

                    InputsUpdate("update", "Update Client")
                    :
                    buttonBoolean("Update Client")
            }
            {
                viewBoolean ?
                    divSearch("view", "View information")
                    :
                    buttonBoolean("View information")
            }
            {
                deleteBoolean ?
                    divSearch("delete", "Delete Client")

                    :
                    buttonBoolean("Delete Client")

            }

        </div>
    );
}

export default Clients;
