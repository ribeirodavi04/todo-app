import React, { useContext, useState } from 'react';
import { Button, Form,  Row, Col } from 'react-bootstrap';
import { ImPlus, ImSearch } from "react-icons/im";
import { ContextApi } from '../../context';

const TodoForm = () => {

    const { addTask } = useContext(ContextApi);
    const [description, setDescription] = useState("");

    return (
        <Form>
           <Form.Group as={Row} className="mb-3">
               <Col md={10} xs={10} sm={8} className="col-6">
                   <Form.Control type="text" placeholder="Digite uma tarefa!" value={description} onChange={(e)=>setDescription(e.target.value)}/>
               </Col>
               <Col md={2} xs={2} sm={4} col={6} className="col-6">
                   <Button onClick={()=>addTask(description)} className="mr-3"><ImPlus/></Button>
                   <Button ><ImSearch/></Button>
               </Col>
           </Form.Group>
            
        </Form>
    );
};

export default TodoForm;