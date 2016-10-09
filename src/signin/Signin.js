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
            'scope': 'profile email',
            'width': 340,
            'height': 80,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.onSuccess,
            'onfailure': this.onFailure
        })
    }

    render() {
        return (
          <div className="singin-container">
              <Jumbotron className="signin-jumbotron">
                  <h1>
                      Currency Exchange
                  </h1>
                  <p>Sign In with your social account</p>
                  <p>
                      <div className="g-signin2"></div>
                  </p>
              </Jumbotron>
          </div>
        );
    }
}
