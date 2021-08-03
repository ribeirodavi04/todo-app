import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextApi = createContext();

const Context = (props) => {

    const url = "http://localhost:3000/api/todos/";
    const [taskList, setTaskList] = useState();

    useEffect(()=>{
        const getTasks = ()=>{
            axios.get(`${url}?sort=-createdA`).then(res=>setTaskList(res.data)).catch(err=>console.log(err));

        }
        getTasks();
    }, [taskList])

    
    const addTask = (rDescription)=>{
        axios.post(url, {description: rDescription}).catch(err=>console.log(err));
    }

    const deleteTask = (task)=>{
        axios.delete(`${url}${task}`).catch(err=>console.log(err));
    }

    const doneTask = (id)=>{
        axios.put(`${url}${id}`,{...taskList, done: true});

    }
    
    const pendingTask = (id)=>{
        axios.put(`${url}${id}`,{...taskList, done: false});

    }
    //const alterTask = (task)=>{
        //axios.put(`${url}${task}`)
    //}
    return (
        <ContextApi.Provider value={{taskList, addTask, deleteTask, doneTask, pendingTask}}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Context;