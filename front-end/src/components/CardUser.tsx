import React from 'react';
import '../styles/cardUser.css'

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

const CardUser: React.FC<Props> = ({ items }) => {
    return (
        <div
        className='card-flex'
        >
            {items.map((item, index) => (
                <div 
                className='card-filter'
                key={index}
                
                >
                    <img
                    id='img-item'
                    src={item.picture.large} 
                    alt="Foto do usuário"
                    />
                        <div 
                        className='div-dates'
                        >
                            {`Nome completo: ${item.name.first} ${item.name.last}`}
                        </div>
                        <div
                        className='div-dates'
                        
                        >
                            {`Email: ${item.email}`}
                        </div>
                        <div
                        className='div-dates'

                        >
                            {`Username: ${item.login.username}`}
                        </div>
                        <div
                        className='div-dates'
                        
                        >
                            {`Idade: ${item.registered.age}`}
                        </div>
                </div>
            ))}
        </div>
    );
};

export default CardUser;




