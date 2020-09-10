import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
// import '../scss/custom.scss'

const Header = ({ linksList }) => {
    const allLinks = linksList.links;
    return (
        <Jumbotron fluid className="jumbotron-override">
            <Container>
                <h1>The Linkinator</h1>
                <p>We remember your URL's so you don't have to.</p>
            </Container>
        </Jumbotron>
    )
}

export default Header;