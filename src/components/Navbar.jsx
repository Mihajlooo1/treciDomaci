import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context';

export default function Navbar() {
    const { user, setUser } = useUserContext();
    return (
        <nav className="navbar navbar-expand-lg border navbar-dark sticky-top bg-secondary">

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/'>Credit requests</NavLink>
                    </li>
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/clients'>Clients</NavLink>
                    </li>
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/credits'>Credits</NavLink>
                    </li>
                    {
                        user && (
                            <li className="nav-item mx-auto">
                                <NavLink className='nav-link' to='/create-request'>Create request</NavLink>
                            </li>
                        )
                    }
                </ul>
                {
                    user && (
                        <button
                            onClick={async () => {
                                await axios.post('/logout', {}, {
                                    headers: {
                                        authorization: `Bearer ${user.token}`
                                    }
                                });
                                setUser(undefined);
                            }}
                            className="btn btn-sm btn-outline-secondary mr-4"
                            type="button">Logout</button>
                    )

                }
                {
                    !user && (
                        <ul className='navbar-nav ml-auto' >
                            <li className="nav-item mx-auto">
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </li>
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}
