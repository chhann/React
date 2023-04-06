import { Children } from 'react';
import { Component } from 'react'


class PropsComp extends Component {
    render () { 
        const {color, Children} = this.props;

        return(
            <div>
                <h1 style={{color : color}}> {color} </h1>
            </div>
        ) 
    }
    
}


export default PropsComp;