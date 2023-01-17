import { useCallback, useEffect, useState } from 'react';
import CardUser from '../components/CardUser';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import '../styles/randonUser.css'

function RandomUserGeneration() {

    interface ItemFilter {
        name: {
            first: string,
            last: string,
        },
        email: string,
        login: {
            username: string,
        },
    }
    const [arrayApi, setArrayApi] = useState([])
    const [filterApi, setFilterApi] = useState([])


    const apiUser = useCallback(async () => {
        try {
            const response =
                await fetch('https://randomuser.me/api/?page=3&results=4');
            const data = await response.json();
            setArrayApi(data.results)
            setFilterApi(data.results)

        } catch (e) {
            console.log(e);
        }
    }, [])

    const getFilter = (event: any): void => {
        const { target } = event
        const { value } = target
        const fullNames = arrayApi
            .filter((items: ItemFilter) => (
                `${items.name.first} ${items.name.last}
                 ${items.email} ${items.login.username}`)
                .includes(value))
        setFilterApi(fullNames)
    }


    useEffect(() => {
        apiUser()
    }, [apiUser])


    return (
        filterApi.length === 0 ? <Loading /> :
            <div>
                <NavBar />
                <div
                className='randon-all'
                >
                    <div
                        className="randon-filter"
                    >
                        <input 
                        id='input-filter'
                        type="text"
                            onChange={getFilter}
                            placeholder="search"
                        />
                    </div>
                    <div
                        className="randon-card"
                    >
                        <CardUser
                            items={filterApi}
                        />
                    </div>
                </div>

            </div>
    );
}

export default RandomUserGeneration;
