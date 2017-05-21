import React, { Component } from 'react'
import Header from './components/header'

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
}

export default App;