import React, { Component } from 'react';
import logo from '../assets/easylingo-high-resolution-logo-black-transparent.png';

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const {fname, lname, email, password} = this.state;
        console.log(fname, lname, email, password);
        fetch("http://localhost:5000/register",{
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                fname,
                email,
                lname,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
            });

    }

  render() {
    const formStyle = {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '8px',
    };
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="border p-4 rounded w-50" style={formStyle}>
          <form onSubmit={this.handleSubmit}>
          <div className="text-center mb-4">
              <img src={logo} alt="Your Logo" width="100" height="100" />
            </div>
            <h3 className="mb-3">Sign Up</h3>

            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={e => this.setState({fname: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" 
              onChange={e => this.setState({lname: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={e => this.setState({email: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={e => this.setState({password: e.target.value})}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right mt-3">
              Already registered? <a href="/login">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
