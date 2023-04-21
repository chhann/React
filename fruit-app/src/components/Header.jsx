import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import './header.css';

export default function Header() {
    return (
        <div className='all'>
            <div className='nav'>
                <div>
                    <Link to='/' style={{textDecoration: "none"}}><span>Home</span></Link>
                </div>

                <div>
                    <Link to='/Stroy' style={{textDecoration: "none"}}><span>Stroy</span></Link>
                </div> 
            </div>
        </div>
    )
}
