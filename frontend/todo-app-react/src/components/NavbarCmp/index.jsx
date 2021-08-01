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
                            <span><ImCalendar /> Todo-app</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navmain" />
                        <Navbar.Collapse id="navmain">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/">About</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            
        </div>
    );
};

export default NavbarCmp;