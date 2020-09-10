import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '../scss/custom.scss'


const UrlModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit URL
        </Button>

            <Modal show={show} onHide={handleClose}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit URL
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


export default UrlModal;