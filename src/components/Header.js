import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/node_modules">Graph Demo</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/bar">
                    Bar
                </NavItem>
                <NavItem eventKey={2} href="/line">
                    Line
                </NavItem>
                <NavItem eventKey={3} href="/pie">
                    Pie
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header;