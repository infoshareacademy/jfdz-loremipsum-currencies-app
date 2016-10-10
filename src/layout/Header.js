import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">React-Bootstrap</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="currency-exchange">
                            <NavItem eventKey={1}>Currency Exchange</NavItem>
                        </LinkContainer>
                        <LinkContainer to="my-wallet">
                            <NavItem eventKey={2}>My Wallet</NavItem>
                        </LinkContainer>
                        <LinkContainer to="user-list">
                            <NavItem eventKey={3}>User List</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/signout">
                            <NavItem eventKey={4}>LogOut</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}