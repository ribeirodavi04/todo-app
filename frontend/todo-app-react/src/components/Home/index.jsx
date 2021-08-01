import React from 'react';
import './style.css';
import PageHeader from '../PageHeader';
import { Container } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const Home = () => {
    return (
        <Container>
            <PageHeader bigTitle="Tarefas" smallTitle="Cadastro"/> 
            <TodoForm/>
            <h2>Lista</h2>
            <TodoList description="Tarefa zika"/>
        </Container>
    );
};

export default Home;