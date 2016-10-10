import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export default class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="currency-exchange">Currency Exchange</NavItem>
                        <NavItem eventKey={2} href="my-wallet">My Wallet</NavItem>
                        <NavItem eventKey={3} href="user-list">User List</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">LogOut</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}