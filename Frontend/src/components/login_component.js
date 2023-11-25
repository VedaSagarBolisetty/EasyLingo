import React, { Component } from 'react';
import logo from '../assets/easylingo-high-resolution-logo-black-transparent.png';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        }
        handleSubmit(e){
              console.log("inside else")
              e.preventDefault();
              const {email, password} = this.state;
              console.log(email, password);
              fetch("http://localhost:5000/loginuser",{
              method: "POST",
              crossDomain: true,
              headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
              },
              body:JSON.stringify({
                email,
                password,
              }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userLogged in");
                if (data.status === "ok") {
                  window.localStorage.setItem("LoggedIn", true);
                  window.localStorage.setItem("token", data.data);
                  alert("login successful");
                  window.location.href = "/*";
                }
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
            <h3 className="mb-3">Sign In</h3>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({password: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-3">
              New User?<a href="/signup">Signup</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
