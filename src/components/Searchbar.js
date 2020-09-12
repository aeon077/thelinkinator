import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import '../scss/custom.scss'

import {
    fetchLinks
} from '../api';

const Searchbar = ({ results, setResults }) => {
    const [comment, setComment] = useState([]);
    const [tags, setTags] = useState([]);

    const handleCommentChange = event => {
        setComment(event.target.value);
    }

    const handleTagChange = event => {
        setTags(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const links = await fetchLinks({
            comment,
            tags
        })
        setResults(links)
    }
    return (
        <Navbar bg="dark" variant="dark" className="ml-auto">
            <Navbar.Brand>Pick my brain <i className="fas fa-angle-double-right"></i> </Navbar.Brand>
            <Form inline onSubmit={handleSubmit}>
                <InputGroup className="mb-3-over">
                    <FormControl
                        placeholder="Keyword Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={comment}
                        onChange={handleCommentChange} />
                </InputGroup>
                <InputGroup className="mb-3-over">
                    <FormControl
                        placeholder="Tag Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={tags}
                        onChange={handleTagChange}
                    />

                </InputGroup>
                <Button variant="outline-info" className="btn-override" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i> Search</Button>
            </Form >

        </Navbar >
    )
}


export default Searchbar;