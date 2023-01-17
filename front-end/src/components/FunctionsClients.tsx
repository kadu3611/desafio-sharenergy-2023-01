import { SetStateAction } from 'react';
import {
    getAll, registerUser, updatUser,
    findById, deleteClient
} from '../helpers/ApiConnect';
import '../styles/clients.css'


interface Client {
    _id: string,
    cpf: number,
    email: string,
    endereço: string,
    nome: string,
    telefone: string,
}


interface ItemClient {
    nome: string;
    email: string;
    telefone: number;
    endereço: string;
    cpf: number;
}


const listClients = (fetch: never[]) => (
fetch.map((item: Client, index: number) => (
        <div
            key={index}
            className='client-item'
        >
            <div>
                <div
                className='div-name'
                >
                    Id: {item._id}
                </div>
                <div
                className='div-name'
                >
                    Nome: {item.nome}
                </div>
                <div
                className='div-name'
                
                >
                    Email: {item.email}
                </div>
                <div
                className='div-name'
                >
                    Telefone: {item.telefone}
                </div>
                <div
                className='div-name'
                >
                    Endereço: {item.endereço}
                </div>
                <div
                className='div-name'
                >
                    CPF: {item.cpf}
                </div>
            </div>
            <div
                className='client-line'
            >
                -
            </div>
        </div>

    ))
)

const getallClient = async (setFetch: React.Dispatch<React.SetStateAction<never[]>>) => {
    const getClients = await getAll();
    setFetch(getClients)
}

const controllerBoolean = (setState: React.Dispatch<React.SetStateAction<boolean>>,
    state: boolean,
): void => {
    setState(!state);
}

const newClient = async (registerDates: {
    Nome: string;
    Email: string;
    Telefone: number;
    Endereço: string;
    CPF: number;
}, setFetch: React.Dispatch<React.SetStateAction<never[]>>) => {
    const { Nome, Email, Telefone, Endereço, CPF } = registerDates
    await registerUser(Nome, Email, Telefone, Endereço, CPF)
    getallClient(setFetch)
}

const upClient = async (registerDates: {
    Nome: string;
    Email: string;
    Telefone: number;
    Endereço: string;
    CPF: number;
}, searchUsername: string, setFetch: React.Dispatch<React.SetStateAction<never[]>>) => {
    const { Nome, Email, Telefone, Endereço, CPF } = registerDates
    await updatUser(searchUsername, Nome, Email,
        Telefone, Endereço, CPF)
    getallClient(setFetch)
}

const viewDatesClient = (allDetailsClient: ItemClient) => {
    return (
        <div>
            <label>
                Nome:
                <div>
                    {allDetailsClient.nome}
                </div>
            </label>
            <label>
                Email:
                <div>
                    {allDetailsClient.email}
                </div>
            </label>
            <label>
                Telefone:
                <div>
                    {allDetailsClient.telefone}
                </div>
            </label>
            <label>
                Endereço:
                <div>
                    {allDetailsClient.endereço}
                </div>
            </label>
            <label>
                CPF:
                <div>
                    {allDetailsClient.cpf}
                </div>
            </label>
        </div>)

}

const viewClient = async (searchUsername: string,
    setDateClientBoolean: React.Dispatch<React.SetStateAction<boolean>>,
    dateClientBoolean: boolean,
    setDateDom: React.Dispatch<React.SetStateAction<JSX.Element>>) => {
    const allDetailsClient = await findById(searchUsername)
    setDateClientBoolean(!dateClientBoolean);
    setDateDom(viewDatesClient(allDetailsClient));
}


const deleteClientId = async (searchUsername: string,
    setFetch: React.Dispatch<React.SetStateAction<never[]>>) => {
    await deleteClient(searchUsername)
    getallClient(setFetch)

}


export {
    getallClient,
    controllerBoolean,
    newClient,
    upClient,
    viewClient,
    deleteClientId,
    listClients,
};
