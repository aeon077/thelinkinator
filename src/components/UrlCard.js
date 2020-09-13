import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '../scss/custom.scss'

// import {
//     fetchLinks,
//     postNewLink
// } from "../api"

const UrlModal = ({ setLinksList }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [url, setUrl] = useState('');
    const [comment, setComment] = useState('');
    const [tags, setTags] = useState([]);

    //handles onChange for url and comment
    const onChange = (update) => (event) => {
        event.preventDefault();
        update(event.target.value)
    }
    //handles onChange for Tags
    const handleTagsChange = event => {
        setTags((event.target.value).split(","));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // await postNewLink({ url, comment, tags });
        // await fetchLinks()
        //     .then(result => {
        //         setLinksList(result.links);
        //         console.log('here')
        //         setUrl('');
        //         setComment('');
        //         setTags([]);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit URL
            </Button>

            <Modal show={show} onHide={handleClose}
                {...setLinksList}
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                URL Address
                                </Form.Label>
                            <InputGroup
                                name="url"
                                className="mb-2"
                                required
                                value={url}
                                onChange={onChange(setUrl)}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" placeholder="URL Address" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                Name
                                </Form.Label>
                            <InputGroup
                                name="comment"
                                className="mb-2"
                                value={comment}
                                onChange={onChange(setComment)}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="far fa-bookmark"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    id="inlineFormInputGroup"
                                    placeholder="Name"
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <InputGroup
                                name="tags"
                                value={tags}
                                onChange={handleTagsChange}>
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