import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../scss/custom.scss'


const Searchbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="ml-auto">
            <Navbar.Brand>Your journey begins here <i className="fas fa-angle-double-right"></i> </Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search Keyword or Tag" className="mr-sm-2" width="100%" />
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                    >
                        <option value="0">Search All</option>
                        <option value="1">Search by Tag</option>
                        <option value="2">Search by URL</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="outline-info" className="btn-override">Search</Button>
            </Form>

        </Navbar>
    )
}


export default Searchbar;