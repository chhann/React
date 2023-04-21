import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Story2List() {
    const fruits = ["apple" , "orange", "pich"]

    return (
        <div>
            <h3>Story2List 목록</h3>
            <Outlet />
        {
            fruits.map((f, i)=>(
                <Link to={`/story2/${f}`} key={i}> {f} |</Link>
            ))
        }

        </div>
    )
}
