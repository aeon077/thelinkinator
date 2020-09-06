import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../scss/custom.scss'


const Header = () => {
    return (

        <Jumbotron fluid className="jumbotron-override">
            <Container>
                <h1>The Linkinator</h1>
                <p>The best URL indexer a websurfer can get.</p>
            </Container>
        </Jumbotron>


    )
}

export default Header;