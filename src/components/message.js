import React, { Component } from 'react'

import '../App.css'

export class message extends Component {
    
    render() {
        const justify = (left) => {
            if(left === true)
                return "chat-text-left text-left"
            else
                return "chat-text-right text-right mr-3"
        }

        
        return (
            <div className={justify(this.props.left)}>
            <h5 >
                <p>
                    message 1 message 2
                </p>
            </h5>
            </div>
        )
    }
}

export default message
