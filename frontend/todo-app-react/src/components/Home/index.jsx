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
            <div className="d-flex">
                <div>
                    <h2>Descrição</h2>
                </div>
                <div className="ml-auto mr-5">
                    <h2>Ações</h2>
                </div>

            </div>
            
            
                {
                    taskList && (taskList.map((item)=><TodoList description={item.description} key={item._id} id={item._id} done={item.done}/>))
                } 
            
        </Container>
    );
};

export default Home;