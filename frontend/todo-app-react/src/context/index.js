import React, { createContext, useEffect, useState } from 'react';
export const ContextApi = createContext();

const Context = (props) => {

    const url = "http://localhost:3000/api/todos/";
    const [taskList, setTaskList] = useState();

    useEffect(()=>{
        const getTasks = async()=>{
            fetch(url)
                .then(res=>res.json())
                .then(res=>setTaskList(res));
        }
        getTasks();
    }, [taskList])

    
    const addTask = async(rDescription)=>{
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({description: rDescription, done: false}),
            headers:{

                'content-type': 'application/json'
            }
        }).then((data)=> {return data}).then((data)=>console.log(data))
    }

    return (
        <ContextApi.Provider value={{taskList, addTask}}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Context;