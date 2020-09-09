import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const URLform = (
    Name,
    URL,
    Tags,
    Submit
) => {
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
                        <br></br>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Name
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="far fa-bookmark"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup" placeholder="Name" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    URL Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup" placeholder="URL Address" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="fas fa-hashtag"></i> &nbsp; Tags</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="With textarea" placeholder="Add tags to group your URL's or find them quickly." />
                                </InputGroup>
                            </Form.Group>
                            <Button variant="outline-info" className="btn-override" type="submit">
                                Submit
                            </Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="cancel">
                                <i className="fa fa-window-close-o" aria-hidden="true"></i> Cancel
      </Accordion.Toggle>
                        </Form>
                        <br></br>
                    </Container>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}

export default URLform;