import React, { Component } from 'react'

export class Friend extends Component {
    // li 
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between">
                <span> Friend 1 </span>
                <span className="badge badge-info">1</span>
            </li>
        )
    }
}

export default Friend
