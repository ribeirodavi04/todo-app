import React from 'react';
import { Button } from 'react-bootstrap';
import { ImCheckmark, ImBin, ImPencil } from "react-icons/im";
import './style.css'
const TodoList = (props) => {
    return (

        <div className="d-flex list-item">
            <div>
                <h3>{props.description}</h3> 
            </div>

            <div className="ml-auto">
                <Button className="mr-2" variant="success"><ImCheckmark/></Button> 
                <Button className="mr-2" variant="danger"><ImBin/></Button>
                <Button className="mr-2" variant="info"><ImPencil/></Button>
            </div>
            
        </div>
        
        
    );
};

export default TodoList;