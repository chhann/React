import React, { useState } from 'react'
import dataa from '../data/dataa.json'

const DataContext = React.createContext();

const DataProvider = ({children})=> {
    
    const [dd, setDd] = useState(dataa);

    const value = {
        state: {dd},
        action: {setDd},
    }


    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider}

export default DataContext 