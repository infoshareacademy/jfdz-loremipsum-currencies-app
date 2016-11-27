import React, { Component } from 'react';
import Heading from '../layout/Heading';



function loadUserList(){
    var userList='';
    for (var name in localStorage)
        userList += (name + " ");
    console.log(localStorage)
    return (<div>{userList}</div>)
}

export default class UserList extends Component {
    render() {
        return (
            <div>
                <Heading>User List</Heading>
                    {loadUserList()}
            </div>
        );
    }
}