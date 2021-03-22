import React from 'react';
import './../../css/InputComponent.css';

class InputComponent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            id: `component-input-${this.props.label}`
        }
    }
    
    render(){

        const { label, state, setState, type = "text" } = this.props;

        return(
            <label htmlFor={this.state.id}>
                {label}:
                <input 
                    id={this.state.id}
                    type={type} 
                    value={state} 
                    placeholder="" 
                    onChange={event => setState(event.target.value)}
                />
            </label>
        )
    }

}

export default InputComponent