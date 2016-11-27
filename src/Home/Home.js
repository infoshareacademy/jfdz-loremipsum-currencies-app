import React, {Component} from 'react';
import Heading from '../layout/Heading';
import "./home.css";
import "../../public/images/money.jpg";

export default class Home extends Component {
    render(){
        return (
            <div>
                <Heading>Home</Heading>

                <div id="home">
                    <h2><b> Welcome to the on-line currency exchange service</b></h2>
                    <p><b>Currency Exchange</b> - up to date currency exchange rates for the last month</p>
                    <p><b>My Wallet</b> - allows you to check your options if you want to exchange multiple currencies</p>
                    <p><b>User List</b> - list of app users</p>
                

                    <img src="./images/money.jpg" alt=""></img>
            </div>
                <div id="power">
                    <p>POWERED TO YOU BY © <b>Lorem Ipsum</b> 2016</p>
                </div>
             </div>
        );
    }
}