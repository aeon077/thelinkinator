import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '../scss/custom.scss'


const URLform = () => {
    const initialFormState = {
        comment: "Name",
        url: "www.github.com",
        tags: ["dev", "fullstack"]
    }
    const newFormState = {
        comment: "",
        url: "",
        tags: [],
    };
    const [formData, setFormData] = useState(initialFormState);
    const [newForm, setNewForm] = useState(newFormState);

    const dispatchFormSet = (payload) => {
        let oldArray = formData;
        let newArray = [...oldArray, payload];
        setFormData(newArray);
        setNewForm({ comment: '', url: '', tags: [''] })
    }


    const handleCommentChange = e => {
        setNewForm({ ...newForm, comment: e.currentTarget.value })
    };

    const handleUrlChange = e => {
        setNewForm({ ...newForm, url: e.currentTarget.value })
    };

    const handleTagsChange = e => {
        setNewForm({ ...newForm, tags: e.currentTarget.value })
    }
    // const saveForm = () => {
    //     let data = {
    //         comment: form.comment,
    //         url: form.url
    //     }

    // const newForm = () => {
    //     setForm(initialFormState);
    //     setSubmitted(false);
    // }


    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey="0"
                    >
                        <i className="far fa-plus-square"></i>
                        Add New URL
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Container>
                        <br></br>
                        <Form onSubmit={e => e.preventDefault()}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label htmlFor="inlineFormInputGroup linkTitle" srOnly>
                                    Name
                                </Form.Label>
                                <InputGroup
                                    name="comment"
                                    className="mb-2"
                                    value={newForm.comment}
                                    onChange={handleCommentChange} >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="far fa-bookmark"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        id="inlineFormInputGroup"
                                        placeholder="Enter a bookmark name or description" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label
                                    htmlFor="inlineFormInputGroup"
                                    srOnly>
                                    URL Address
                                </Form.Label>
                                <InputGroup
                                    name="url"
                                    className="mb-2"
                                    required
                                    value={newForm.url}
                                    onChange={handleUrlChange}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="fas fa-map-marker-alt"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        id="inlineFormInputGroup"
                                        placeholder="URL Address" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <InputGroup
                                    name="tags"
                                    value={newForm.tags}
                                    onChange={handleTagsChange}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="fas fa-hashtag"></i> &nbsp; Tags</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        as="textarea"
                                        aria-label="With textarea"
                                        placeholder="Add tags to group your URL's or find them quickly." />
                                </InputGroup>
                            </Form.Group>
                            <Button
                                onClick={() => dispatchFormSet(newForm)}
                                variant="outline-info"
                                className="btn-override"
                                type="submit">
                                Submit
                            </Button>
                            <Accordion.Toggle
                                as={Button} variant="link"
                                eventKey="0" className="cancel">
                                <i className="fa fa-window-close-o" aria-hidden="true"></i> Cancel
      </Accordion.Toggle>
                        </Form>
                        <br></br>
                    </Container>
                </Accordion.Collapse>
            </Card>

        </Accordion >
    )
};

export default URLform;