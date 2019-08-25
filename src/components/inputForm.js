import React, { Component } from 'react'

export class inputForm extends Component {

    render() {
        return (
            <div className="card-footer bg1">
                <form className="d-flex flex-row justify-content-between">
                    <input type="text" className="flex-grow-1" >

                    </input>
                    <button type="submit" className="btn btn-primary ml-2">SEND</button>
                </form>
            </div>
        )
    }
}

export default inputForm
