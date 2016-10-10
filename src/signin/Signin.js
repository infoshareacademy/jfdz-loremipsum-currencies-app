import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login-component';

import { Jumbotron } from 'react-bootstrap';
import './Signin.css';


export default class Signin extends Component {

    constructor (props, context) {
        super(props, context);
    }

    responseGoogle (googleUser) {
        var id_token = googleUser.getAuthResponse();
        console.log(id_token);
    }

    render() {
        return (
          <div className={"singin-container"}>
              <Jumbotron className="signin-jumbotron">
                  <h1>
                      Currency Exchange
                  </h1>
                  <p>Sign In with your social account</p>
                  <GoogleLogin socialId="714228051768-i9egh3dupmufu15gfuku94rmg2u9fm3u.apps.googleusercontent.com"
                               class="google-login"
                               scope="profile"
                               responseHandler={this.responseGoogle}
                               buttonText="Signin with Google+"/>
              </Jumbotron>
          </div>
        );
    }
}
