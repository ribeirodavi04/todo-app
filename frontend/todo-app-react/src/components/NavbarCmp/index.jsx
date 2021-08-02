import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ImCalendar } from "react-icons/im";
import { Link } from 'react-router-dom'
import './style.css';

const NavbarCmp = () => {
    return (
        <div className="navCmp">
            <Container>
                <Navbar expand= "lg" variant="dark" className="navbarclass">
                    <Container>
                        <Navbar.Brand href="/home">
                            <span><ImCalendar /> TodoApp</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navmain" />
                        <Navbar.Collapse id="navmain">
                            <Nav className="ml-auto">
                                <Nav.Item className="mr-4"><Link to="/">Home</Link></Nav.Item>
                                <Nav.Item><Link to="/AboutUs">About</Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            
        </div>
    );
};

export default NavbarCmp;