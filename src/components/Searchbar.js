import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../scss/custom.scss'

const Searchbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="ml-auto">
            <Navbar.Brand href="#home">The Linkinator</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select">
                        <option>Search All</option>
                        <option>Search by Tag</option>
                        <option>Search by URL</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="outline-info" className="btn-override">Search</Button>
            </Form>
            <Nav justify-content-end className="mr-auto">
                <Nav.Link href="#home">Add Link</Nav.Link>
            </Nav>

        </Navbar>
    )
}


export default Searchbar;