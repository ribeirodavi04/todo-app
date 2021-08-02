import React from 'react';
import './style.css';
import PageHeader from '../PageHeader';
import { Container } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoList from '../../TodoList';

const Home = () => {
    return (
        <Container>
            <PageHeader bigTitle="Pagina" smallTitle="inicial"/> 
            <TodoForm/>
            <TodoList/>
        </Container>
    );
};

export default Home;