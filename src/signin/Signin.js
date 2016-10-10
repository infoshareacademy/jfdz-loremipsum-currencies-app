import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import './Signin.css';

export default class Signin extends Component {

    componentWillMount() {
        this.setState({
            profile: null
        });

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

    onSuccess(googleUser) {
        this.props.profile = googleUser.getBasicProfile();
        console.log('Name: ' + this.props.profile.getName());
        console.log('Image URL: ' + this.props.profile.getImageUrl());
        console.log('Email: ' + this.props.profile.getEmail());
    }

    onFailure(error) {
        console.log(error);
    }


    render() {
        return (
          <div className="singin-container">
              <Jumbotron className="signin-jumbotron">
                  <h1>
                      Currency Exchange
                  </h1>
                  <p>Sign In with your social account</p>
                  <div className="g-signin2"></div>
              </Jumbotron>
          </div>
        );
    }
}
