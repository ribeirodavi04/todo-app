import React from 'react';
import './style.css';
import PageHeader from '../PageHeader';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <PageHeader bigTitle="Pagina" smallTitle="inicial"/> 
        </Container>
    );
};

export default Home;