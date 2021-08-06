import React from 'react';
import '../app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
export default function Header(props) {
    const { logout } = props;

    return (


        <>
            <Navbar className='justify-content-center' bg="light" variant="light" fixed="top">
                <Nav >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Portfolio</Nav.Link>
                    <Nav.Link href="#pricing">Skills</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link onClick={logout}>logout</Nav.Link>
                </Nav>


            </Navbar>
        </>
    )
}
