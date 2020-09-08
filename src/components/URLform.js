import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

const URLform = () => {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <i className="far fa-plus-square"></i>  Add New URL
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Container>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="New Bookmark" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Location:</Form.Label>
                                <Form.Control type="url" placeholder="NewURL.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Tags:</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Add tags to group your url's, and for quick searching!" />
                            </Form.Group>
                            <Button variant="outline-info" className="btn-override" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}

export default URLform;