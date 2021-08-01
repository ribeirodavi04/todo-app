import React from 'react';
import { Button } from 'react-bootstrap';
import { ImPlus, ImBin, ImPencil } from "react-icons/im";

const TodoList = () => {
    return (
        <ul>
            <li><h3>Tarefa muito bala zé</h3> <Button><ImPlus/></Button> <Button><ImBin/></Button> <Button><ImPencil/></Button></li>
        </ul>
    );
};

export default TodoList;