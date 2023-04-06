import { Component } from 'react'

class CountComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count : 0 
        }
    }
    render(){
        const {count} = this.props;
        return(
            <div>

                <h1>{count}</h1>

                <button 
                    onClick={() => { this.setState({count : count+10}) } }
                >
                    +10
                </button>

            </div>
        )
    }
}

export default CountComp;