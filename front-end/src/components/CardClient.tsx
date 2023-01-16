import React from 'react';

interface Props {
    items: {
        picture: {
            large: string
        },
        name:{
            first: string,
            last: string,
        },
        email:string,
        login:{
            username:string,
        },
        registered:{
            age:number
        }
    }[];
}

const CardClient: React.FC<Props> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <img
                    src={item.picture.large} 
                    alt="Foto do usuário"
                    />
                        <div>
                            {`Nome completo: ${item.name.first} ${item.name.last}`}
                        </div>
                        <div>
                            {`Email: ${item.email}`}
                        </div>
                        <div>
                            {`Username: ${item.login.username}`}
                        </div>
                        <div>
                            {`Idade: ${item.registered.age}`}
                        </div>
                </div>
            ))}
        </div>
    );
};

export default CardClient;