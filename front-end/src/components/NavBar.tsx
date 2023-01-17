import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar: React.FC = () => {

    return (
        <div >
            <nav>
                <div>
                    <ul className='nav-ul'>

                        <li className='nav-il '>
                            <Link
                                to="/userlist">
                                Home
                            </Link>
                        </li>
                        <li className='nav-il '>
                            <Link
                                to="/userlist/randomDogs">
                                Random Dogs
                            </Link>
                        </li>
                        <li className='nav-il '>
                            <Link
                                to="/userlist/clients">
                                Clients
                            </Link>
                        </li>
                        <li className='nav-il '>
                            <Link
                                to="/userlist/100">
                                Random Cats
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar
    ;