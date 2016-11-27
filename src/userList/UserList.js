import React, { Component } from 'react';
import Heading from '../layout/Heading';



function loadUserList(){
    var userList='';
    for (var name in localStorage)
        userList += (name);
    return (<tr><td>{userList}</td></tr>)
}

export default class UserList extends Component {
    render() {
        return (
            <div>
                <Heading>User List</Heading>
                <table>
                    {loadUserList()}
                </table>
            </div>
        );
    }
}