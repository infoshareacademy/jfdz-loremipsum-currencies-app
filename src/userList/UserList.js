import React, { Component } from 'react';
import Heading from '../layout/Heading';







export default class UserList extends Component {



    render() {
        let storedNames = JSON.parse(localStorage.getItem("names"))

        return (
            <div>
                <Heading>User List</Heading>
                {storedNames.map((item) => <div>{item}</div>) }
            </div>
        );
    }
}