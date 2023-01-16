import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

    return (
        <div>
            <nav>
                <div>
                    <ul>

                        <li>
                            <Link
                                to="/userlist">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/userlist/randomDogs">
                                Random Dogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/userlist/clients">
                                Clients
                            </Link>
                        </li>
                        <li>
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