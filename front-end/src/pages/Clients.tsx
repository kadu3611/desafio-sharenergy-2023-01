import React, { useState } from 'react';


const Clients: React.FC = () => {

    const arrayInput = ["Nome", "Email", "Telefone", "Endereço", "CPF"];
    const [registerBoolean, setRegisterBoolean] = useState(false)
    const [updateBoolean, setUpdateBoolean] = useState(false)
    const [viewBoolean, setViewrBoolean] = useState(false)
    const [deleteBoolean, setDeleteBoolean] = useState(false)


    const [serchUsername, setSerchUsername] = useState({
        username: ''
    });
    console.log(serchUsername, 'viewInput');


    const [registerDates, setRegisterDates] = useState({
        Nome: '',
        Email: '',
        Telefone: '',
        Endereço: '',
        CPF: ''
    });


    const controllerBoolean = (text: string): void => {
        if (text === "Register Client") setRegisterBoolean(!registerBoolean);
        else if (text === "Update Client") setUpdateBoolean(!updateBoolean);
        else if (text === "View information") setViewrBoolean(!viewBoolean);
        else if (text === "Delete Client") setDeleteBoolean(!deleteBoolean);

    }

    const handleInput = (event: any): void => {
        const { target } = event
        const { value, name } = target
        if (name === "view" || name === "delete") {
            const inputUsername = { username: value }
            setSerchUsername(inputUsername)
        }
        const allValues = { ...registerDates, [name]: value }
        setRegisterDates(allValues)
    }

    const divRegisterAndUpdate = (type: string) => (
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
                                type={item === "Telefone" || item === "CPF" ? "number" : "text"}
                                onChange={handleInput}
                            />
                        </label>
                    </div>
                ))
            }
            <div>
                <button
                    type="button"
                    onClick={() => console.log(type)}
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

    const divSearch = (text: string) => (
        <div>
            <label>
                username
                <input
                    type="text"
                    name={text}
                    onChange={handleInput}
                />
            </label>
            <button
                type="button"
                onClick={() => console.log(text)}
            >
                Search
            </button>
        </div>
    )


    return (
        <div>
            {
                registerBoolean ?
                    divRegisterAndUpdate("Register Client")
                    :
                    buttonBoolean("Register Client")
            }
            {
                updateBoolean ?
                    divRegisterAndUpdate("Update Client")
                    :
                    buttonBoolean("Update Client")
            }
            {
                viewBoolean ?
                    divSearch("view")
                    :
                    buttonBoolean("View information")
            }
            {
                deleteBoolean ?
                    divSearch("delete")

                    :
                    buttonBoolean("Delete Client")

            }

        </div>
    );
}

export default Clients;
