import React, { useContext } from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import dataa from '../data/dataa.json'
import DataContext from '../components/DataContext'
import './Stroy.css'

export default function Story() {

    const value = useContext(DataContext);
    const {state} =value;
    

    console.log(state.dd)

    return (
    <div>
        <h1>StroyList</h1>  
        
        <ul className='list'>
            {state.dd.map((fruit)=>(
                <li key={fruit.name}>
                    <NavLink to={`/stroy/${fruit.name}`} style={{textDecoration: "none"}} color={"black"}>

                    {fruit.name}Story
                    </NavLink>
                </li>
            ))
            }
        </ul>
        <Outlet/>
    </div>
    )
}
