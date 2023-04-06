import React, {Component} from 'react'

export class LifeCycle extends Component {
    componentDidMount () {
        console.log("마운트가 되었슴")
    }

    render() {
        return (
        <div>
        LifeCycle
        </div>
        )
    }
}

export default LifeCycle