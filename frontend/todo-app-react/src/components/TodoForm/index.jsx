import React from 'react';
import { Button, Form,  Row, Col } from 'react-bootstrap';
import { ImPlus } from "react-icons/im";
const TodoForm = () => {
    return (
        <Form>
           <Form.Group as={Row} className="mb-3">
               <Col sm={11}>
                   <Form.Control type="text" placeholder="Digite uma tarefa!"/>
               </Col>
               <Col sm={1}>
                   <Button><ImPlus/></Button>
               </Col>
           </Form.Group>
            
        </Form>
    );
};

export default TodoForm;