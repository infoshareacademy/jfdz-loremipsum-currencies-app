import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Currency Exchange</NavItem>
                        <NavItem eventKey={2} href="#">My Wallet</NavItem>
                        <NavItem eventKey={3} href="#">User List</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">LogOut</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}