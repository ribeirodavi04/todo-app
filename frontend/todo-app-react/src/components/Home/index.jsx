import React, { useContext } from 'react';
import './style.css';
import PageHeader from '../PageHeader';
import { Container } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { ContextApi } from '../../context';

const Home = () => {

    const { taskList} = useContext(ContextApi);

    return (
        <Container>
            <PageHeader bigTitle="Tarefas" smallTitle="Cadastro"/> 
            <TodoForm/>
            <h2>Lista</h2>
            {
                taskList && (taskList.map((item)=><TodoList description={item.description} key={item._id} id={item._id}/>))
            }
        </Container>
    );
};

export default Home;