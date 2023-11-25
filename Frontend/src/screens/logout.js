import React, { Component } from 'react';

export default class Logout extends Component {
    async handleLogout(){
        console.log("Logging Out !!");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("LoggedIn");
        window.location.href = "/login";
    }

    render() {
        return (
            <button onClick={this.handleLogout}>
                Logout
            </button>
        )
    }
}