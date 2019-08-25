import React, { Component } from 'react'
import Message from './message'
import InputForm from './inputForm'

import '../App.css'

export class chatBox extends Component {
    // This is a card with the 
    //      header having users names
    //      body chat
    //      footer is the inputForm

    render() {
        return (
            <div className="card flex-grow-1 ml-2 mr-3">
                <h4 className="bg-warning card-header text-capitalize"> friend1 </h4>
                <div className="card-body">
                    <Message left={true}/>
                    <Message left={false}/>
                    <Message left={false}/>
                </div>
                <InputForm />
            </div>
        )
    }
}

export default chatBox
