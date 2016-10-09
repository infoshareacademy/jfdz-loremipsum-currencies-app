import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import './Signin.css';

export default class Signin extends Component {

    onSuccess(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log(this.profile);
        console.log('Name: ' + this.profile.getName());
        console.log('Image URL: ' + this.profile.getImageUrl());
        console.log('Email: ' + this.profile.getEmail());
    }

    onFailure(error) {
        console.log(error);
    }

    componentDidMount() {
        this.gapi.signin2.render('g-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 200,
            'height': 200,
            'longtitle': true,
            'onsuccess': this.onSuccess,
            'onfailure': this.onFailure
        })
    }

    render() {
        return (
          <div className="singin-container">
              <Jumbotron className="signin-jumbotron">
                  <h1
                      Currency Exchange
                  </h1>
                  <p>Sign In with your social account</p>
                  aaa - {this.cos}
                  <p>
                      <div className="g-signin2"></div>
                  </p>
              </Jumbotron>
          </div>
        );
    }
}
