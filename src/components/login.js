import React, { Component } from 'react'

import '../App.css'

export class login extends Component {
    //This is a row in a container
    //onSubmit goes in the form not button
    render() {
        return (
            <div className="card mx-3 my-3 my-login">
                <form className="d-flex flex-row justify-content-between">
                    <input type="text" className="mx-3 my-3 flex-grow-1" >

                    </input>
                    <button type="submit" className="btn btn-primary mr-3 my-3">LogIn</button>
                </form>
            </div>
        )
    }
}

export default login
