import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ImCheckmark, ImBin } from "react-icons/im";
import { ContextApi } from '../../context';
import { FaRedoAlt } from "react-icons/fa";

import './style.css'
const TodoList = (props) => {

    const { deleteTask, doneTask, pendingTask } = useContext(ContextApi);
    const style = props.done ? {"textDecoration":"line-through","color":"gray"}:{"textDecoration":"none"}

    return (
        
        <div className="d-flex list-item">
            <div>
                <h4 style={style}>
                    {props.description }
                </h4> 
            </div>

            <div className="ml-auto">
                <Button className="mr-2" variant="success" onClick={()=>doneTask(props.id)}><ImCheckmark/></Button> 
                <Button className="mr-2" variant="warning" onClick={()=>pendingTask(props.id)}><FaRedoAlt/></Button>
                <Button className="" variant="danger" onClick={()=>deleteTask(props.id)}><ImBin/></Button>
                
            </div>
            
        </div>
        
        
    );
};

export default TodoList;