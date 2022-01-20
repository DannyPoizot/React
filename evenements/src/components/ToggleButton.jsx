import React, { Component } from 'react';

class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Cette liaison est nécessaire afin de permettre 
        // l'utilisation de "this" dans la fonction de rappel.
        // this.handleClick = this.handleClick.bind(this)
         
    }

    handleClick(e) {
        console.log(e);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));    
    }

    render() {
        return (
            //{/* <button onClick={() => this.handleClick(this.props.value)}> */}
            <button onClick={this.handleClick.bind(this, "kikoolol")}> 
                {this.state.isToggleOn ? "On" : "Off"}
            </button>
        );
    }
}




export default ToggleButton;