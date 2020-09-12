import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '../scss/custom.scss'

import {
    fetchLinks,
    postNewLink
} from "../api"

const URLform = ({ setLinksList }) => {
    const [url, setUrl] = useState('');
    const [comment, setComment] = useState('');
    const [tags, setTags] = useState([]);

    const handleUrlChange = event => {
        setUrl(event.target.value);
    };

    const handleCommentChange = event => {
        setComment(event.target.value);
    };

    const handleTagsChange = event => {
        setTags((event.target.value).split(","));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await postNewLink({ url, comment, tags });
        await fetchLinks()
            .then(result => {
                setLinksList(result.links);
            })
            .catch(error => {
                console.error(error);
            });
    };

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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label
                                    htmlFor="inlineFormInputGroup"
                                    srOnly>
                                    URL Address
                                </Form.Label>
                                <InputGroup
                                    name="url"
                                    className="mb-2"
                                    required
                                    value={url}
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
                                <Form.Label htmlFor="inlineFormInputGroup linkTitle" srOnly>
                                    Comment
                                </Form.Label>
                                <InputGroup
                                    name="comment"
                                    className="mb-2"
                                    value={comment}
                                    onChange={handleCommentChange} >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="far fa-bookmark"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        id="inlineFormInputGroup"
                                        placeholder="Enter a bookmark name or description" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <InputGroup
                                    name="tags"
                                    value={tags}
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