import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

import { Jumbotron } from 'react-bootstrap';
import './Signin.css';

const success  = (response) => {
    console.log(response);
}

const error = (response) => {
    console.error(response);
};

export default class Signin extends Component {
    render() {
        return (
          <div className="singin-container">
              <Jumbotron className="signin-jumbotron">
                  <h1>
                      Currency Exchange
                  </h1>
                  <p>Sign In with your social account</p>
                  <GoogleLogin
                      clientId="714228051768-i9egh3dupmufu15gfuku94rmg2u9fm3u.apps.googleusercontent.com"
                      buttonText="Sign in with Google+"
                      onSuccess={success}
                      onFailure={error} />
              </Jumbotron>
          </div>
        );
    }
}

