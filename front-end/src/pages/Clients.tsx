import React, { useEffect, useState } from 'react';
import {
    getallClient, controllerBoolean, newClient,
    upClient, viewClient, deleteClientId, listClients
} from '../components/FunctionsClients'
import NavBar from '../components/NavBar';
import '../styles/clients.css'


const Clients: React.FC = () => {

    const arrayInput = ["Nome:", "Email:", "Telefone:", "Endereço:", "CPF:"];
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


    const buttonBoolean = (text: string, setState: React.Dispatch<React.SetStateAction<boolean>>,
        state: boolean) => (
        <div
            className='client-div-button'
        >
            <button
                id='client-button'
                name={text}
                type="button"
                onClick={() => controllerBoolean(setState, state)}
            >
                {text}
            </button>
        </div>
    )

    const divRegister = (setState: React.Dispatch<React.SetStateAction<boolean>>,
        state: boolean) => (
        <div
            className='client-div-button-register'
        >
            {
                arrayInput.map((item: string, index: number) => (
                    <div
                        key={index}
                    >
                        <label
                            className='client-label-register'
                        >
                            {item}
                            <div>
                                <input
                                    name={item}
                                    type={item === "Telefone" || item === "CPF"
                                        ?
                                        "number" : "text"}
                                    onChange={handleInputRegister}
                                />
                            </div>
                        </label>
                    </div>
                ))
            }
            <div
                className='client-div-bottom-button'
            >
                <div
                    id='client-bottom-button'
                >
                    <button
                        id='client-button-register'
                        type="button"
                        onClick={() => newClient(registerDates, setFetch)}
                    >
                        Save
                    </button>
                </div>
                <div>
                    <button
                        id='client-button-register'

                        type="button"
                        onClick={() => controllerBoolean(setState, state)}
                    >
                        Closed register
                    </button>
                </div>
            </div>
        </div>
    );

    const divSearchDelete = (text: string, setState: React.Dispatch<React.SetStateAction<boolean>>,
        state: boolean) => (

        <div
            className='client-div-delete-view'

        >
            <div>
                <label>
                    id:
                    <div>
                    <input
                        type="text"
                        name={text}
                        onChange={handleInput}
                    />
                    </div>
                </label>
                <button
                    id='client-button-search-delete'
                    type="button"
                    onClick={() => deleteClientId(searchUsername, setFetch)}
                >
                    Delete
                </button>
            </div>
            <div
                className='client-div-delete-closed'
            >
                <button
                id='client-button-closed'
                    type="button"
                    onClick={() => controllerBoolean(setState, state)}
                >
                    Closed register
                </button>
            </div>
        </div>
    )


    const divSearchView = (text: string, setState: React.Dispatch<React.SetStateAction<boolean>>,
        state: boolean) => (
        <div
            className='client-div-delete-view'
        >
            {
                dateDom.props.children
                    ?
                    dateDom
                    :
                    <div>
                        <label>
                            id:
                            <div>
                                <input
                                    type="text"
                                    name={text}
                                    onChange={handleInput}
                                />
                            </div>

                        </label>
                        <button
                            id='client-button-search-view'
                            type="button"
                            onClick={() =>
                                viewClient(searchUsername,
                                    setDateClientBoolean, dateClientBoolean, setDateDom)
                            }
                        >
                            Search
                        </button>
                    </div>
            }
            <div
                className='client-div-view-closed'
            >
                <button
                id='client-button-closed '
                    type="button"
                    onClick={() => controllerBoolean(setState, state)}
                >
                    Closed register
                </button>
            </div>
        </div>
    )

    const InputsUpdate = (text: string, setState: React.Dispatch<React.SetStateAction<boolean>>,
        state: boolean) => (
        <div
            className='client-div-update'
        >
            <label>
                id:
                <div>
                    <input
                        type="text"
                        name={text}
                        onChange={handleInput}
                    />
                </div>
            </label>
            {
                arrayInput.map((item: string, index: number) => (
                    <div
                        key={index}
                    >
                        <label
                            className='client-label-register'
                        >
                            {item}
                            <div>
                                <input
                                    name={item}
                                    type={item === "Telefone" || item === "CPF"
                                        ?
                                        "number" : "text"}
                                    onChange={handleInput}
                                />
                            </div>
                        </label>
                    </div>
                ))
            }
            <div
                className='client-div-update-map'
            >
                <div>
                    <button
                        className='client-div-button'
                        type="button"
                        onClick={() => upClient(registerDates, searchUsername, setFetch)}
                    >
                        Save
                    </button>
                </div>
                <div>

                    <button
                        className='client-div-button'

                        type="button"
                        onClick={() => controllerBoolean(setState, state)}
                    >
                        Closed register
                    </button>
                </div>
            </div>
        </div>
    )



    useEffect(() => {
        getallClient(setFetch)
    }, []);

    return (
        <div>
            <NavBar />
            <div
                className='client-all'

            >
                {
                    listClients(fetch)
                }
            </div>

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
                    divSearchView("view", setViewrBoolean, viewBoolean)
                    :
                    buttonBoolean("View information", setViewrBoolean, viewBoolean)
            }
            {
                deleteBoolean ?
                    divSearchDelete("delete", setDeleteBoolean, deleteBoolean)
                    :
                    buttonBoolean("Delete Client", setDeleteBoolean, deleteBoolean)
            }
        </div>
    );
}
export default Clients;
