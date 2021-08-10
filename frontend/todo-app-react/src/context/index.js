import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextApi = createContext();

const Context = (props) => {

    const url = "http://localhost:3000/api/todos/";
    const [taskList, setTaskList] = useState();
    const [listSearch, setListSearch]= useState();
    const [searchV, setSearchV] = useState(false);

    const getTasks = ()=>{
        axios.get(`${url}?sort=-createdA`).then(res=>setTaskList(res.data)).catch(err=>console.log(err));
            
    }
    
    useEffect(()=>{  
        getTasks();
    }, [taskList]);

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

    const search = (description) =>{
        setSearchV(true)
        axios.get(`${url}?sort=-createdA&description__regex=/${description}/`).then((res)=>{setListSearch(res.data)}).catch(err=>console.log(err));
    }


    return (
        <ContextApi.Provider value={{ taskList, addTask, deleteTask, doneTask, pendingTask, search, listSearch, searchV, setSearchV }}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Context;