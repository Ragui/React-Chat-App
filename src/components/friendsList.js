import React, { Component } from 'react'
import Friend from './Friend'

import '../App.css'

export class friendsList extends Component {
    // This one is an ul of friends
    render() {
        return (
            <div className="ml-3 card children">
                <h4 className="bg-success text-center text-capitalize card-header">Friends List</h4>
                <ul className="list-group list-group-flush card-body">
                    <Friend />
                    <Friend />
                </ul>
            </div>
        )
    }
}

export default friendsList
