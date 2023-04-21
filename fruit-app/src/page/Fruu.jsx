import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../components/DataContext';


export const Fruu = (props) => {
    const {id} = useParams();

    const value = useContext(DataContext);
    const {state} = value;

    const a = state.dd;

    const selectFruus = a.find((fruit)=>(
        fruit.name === id
    ))



    return (
        <div>
            <p>{selectFruus.name}-Stroy</p>
                
            <img src={selectFruus.picture} alt="" width={500} height={500}/>
            
            <p>{selectFruus.detail}</p>

            
        </div>
    )
}
