import { SetStateAction } from 'react';
import {
    getAll, registerUser, updatUser,
    findById, deleteClient
} from '../helpers/ApiConnect';

interface Client {
    _id: string,
    cpf: number,
    email: string,
    endereço: string,
    nome: string,
    telefone: string,
}

interface registerDates {
    Nome: string | undefined;
    Email: string | undefined;
    Telefone: number | undefined;
    Endereço: string | undefined;
    CPF: number | undefined;

}

interface ItemClient {
    nome: string;
    email: string;
    telefone: number;
    endereço: string;
    cpf: number;
}



const arrayInput = ["Nome", "Email", "Telefone", "Endereço", "CPF"];


const listClients = (fetch: []) => (
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

const getallClient = async (setFetch: React.Dispatch<React.SetStateAction<never[]>>) => {
    const getClients = await getAll();
    setFetch(getClients)
}

const controllerBoolean = (setState: React.Dispatch<React.SetStateAction<boolean>>,
    state: boolean): void => {
    setState(!state);

}

// const handelValue = (event:any) => {
//     const { target } = event
//     const { value } = target
//     return value
// }
// const handelName = (event:any) => {
//     const { target } = event
//     const { name } = target
//     return name
// }

// const handelObject = (registerDates: registeObject , event:any, 
//     setState: React.Dispatch<React.SetStateAction<{
//     Nome: string;
//     Email: string;
//     Telefone: number;
//     Endereço: string;
//     CPF: number;
// }>>) => {
//     const value = handelValue()
//     const name = handelName()
//     const allValues = {...registerDates, [name]: value }
//     setState(allValues)
// }

// const handleInput = (event: any,
//      setState:React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<{
//         Nome: string;
//         Email: string;
//         Telefone: number;
//         Endereço: string;
//         CPF: number;
//     }>>): void => {
//     const { target } = event
//     const { value } = target
//         setState(value)
//     }


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


// const deleteClientId = async () => {
//     await deleteClient(searchUsername)
//     getallClient()

// }

// const divRegister = (type: string) => (
//     <div>
//         {
//             arrayInput.map((item: string, index: number) => (
//                 <div
//                     key={index}
//                 >
//                     <label>
//                         {item}
//                         <input
//                             name={item}
//                             type={item === "Telefone" || item === "CPF"
//                                 ?
//                                 "number" : "text"}
//                             onChange={handleInput}
//                         />
//                     </label>
//                 </div>
//             ))
//         }
//         <div>
//             <button
//                 type="button"
//                 onClick={() => newClient()}
//             >
//                 Save
//             </button>
//             <button
//                 type="button"
//                 onClick={() => controllerBoolean(type)}
//             >
//                 Closed register
//             </button>
//         </div>
//     </div>
// );

// const buttonBoolean = (text: string) => (
//     <div>
//         <button
//             name={text}
//             type="button"
//             onClick={() => controllerBoolean(text)}
//         >
//             {text}
//         </button>
//     </div>
// )

// const divSearch = (text: string, type: string) => (
//     <div>
//         <label>
//             id:
//             <input
//                 type="text"
//                 name={text}
//                 onChange={handleInput}
//             />
//         </label>
//         <button
//             type="button"
//             onClick={() => {
//                 if(text === "view"){ viewClient()
//                 }
//                 else{
//                     deleteClientId()
//                 }
//             }}
//         >
//             {
//                 text === "view" ? "Search" : "Delete"
//             }
//         </button>
//         <button
//             type="button"
//             onClick={() => controllerBoolean(type)}
//         >
//             Closed register
//         </button>
//     </div>
// )

// const InputsUpdate = (text:string, type:string) =>(
//     <div>
//         <label>
//             id:
//             <input
//                 type="text"
//                 name={text}
//                 onChange={handleInput}
//             />
//         </label>
//         {
//             arrayInput.map((item: string, index: number) => (
//                 <div
//                     key={index}
//                 >
//                     <label>
//                         {item}
//                         <input
//                             name={item}
//                             type={item === "Telefone" || item === "CPF"
//                                 ?
//                                 "number" : "text"}
//                             onChange={handleInput}
//                         />
//                     </label>
//                 </div>
//             ))
//         }
//         <div>
//         <button
//             type="button"
//             onClick={() => upClient()}
//         >
//             Save
//         </button>
//         <button
//             type="button"
//             onClick={() => controllerBoolean(type)}
//         >
//             Closed register
//         </button>
//         </div>
//     </div>
//     )




export {
    getallClient,
    controllerBoolean,
    newClient,
    upClient,
    viewClient
};
