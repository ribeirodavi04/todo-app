import React, { useContext } from 'react';
import './style.css';
import PageHeader from '../PageHeader';
import { Container } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { ContextApi } from '../../context';

const Home = () => {

    const { taskList, listSearch, searchV } = useContext(ContextApi);
    const searchlist = listSearch && (listSearch.map((item)=><TodoList description={item.description} key={item._id} id={item._id} done={item.done}/>))
    return (
        <Container>
            <PageHeader bigTitle="Tarefas" smallTitle="Cadastro"/> 
            <TodoForm/>
            <div className="d-flex">
                <div>
                    <h3>Descrição</h3>
                </div>
                <div className="ml-auto mr-5">
                    <h3>Ações</h3>
                </div>

            </div>       
            <div>
                {
                    searchV ? searchlist : taskList && (taskList.map((item)=><TodoList description={item.description} key={item._id} id={item._id} done={item.done}/>))
                }
            </div>
                
            
        </Container>
    );
};

export default Home;