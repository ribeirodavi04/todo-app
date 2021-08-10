import React, { useContext, useState } from 'react';
import { Button, Form,  Row, Col } from 'react-bootstrap';
import { ImPlus, ImSearch, ImCross } from "react-icons/im";
import { ContextApi } from '../../context';

const TodoForm = () => {

    const { addTask, search, setSearchV } = useContext(ContextApi);
    const [description, setDescription] = useState("");

    return (
        <Form>
           <Form.Group as={Row} className="mb-3">
               <Col md={9} xs={10} sm={8} className="col-6">
                   <Form.Control type="text" placeholder="Digite uma tarefa!" value={description} onChange={(e)=>setDescription(e.target.value)}/>
               </Col>
               <Col md={3} xs={2} sm={4} col={6} className="col-6">
                   <Button onClick={()=>addTask(description)} className="mr-2" ><ImPlus/></Button>
                   <Button onClick={()=>search(description)} className="mr-2" variant="info"><ImSearch/></Button>
                   <Button onClick={()=>setSearchV(false)} variant="light"><ImCross/></Button>
               </Col>
           </Form.Group>
            
        </Form>
    );
};

export default TodoForm;