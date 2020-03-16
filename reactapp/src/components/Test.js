import React, { Component } from 'react'

class Test extends Component {

    constructor(props){
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({
            a:20
        })
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update!");
        return true;
    }
    

    componentDidUpdate = (prevProps, prevState) => {
        console.log("component Did Update!");
    }
    
    
    render() {
        console.log("Render");
        console.log(this.state.a);
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;
