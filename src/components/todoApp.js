import { useState } from "react";
import Todo from "./todo";
import '../styles/todoApp.css';

export default function TodoApp(){

    const [title, setTitle]=useState('');
    const [tarea, setTarea]=useState([]);

    function handleChange(e){
        const valor=e.target.value;
        setTitle(valor);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(title!==''){
            const newTarea={
                id: crypto.randomUUID(),
                title: title,
                completed: false
            }
            setTarea([newTarea,...tarea])
            setTitle('');
        }
        else{
            alert("Ingrese una tarea por favor");
        }
    }
    function handleUpdate(id, valor){
        const temp=[...tarea];
        const item=temp.find(item=>item.id===id);
        item.title=valor;
        setTarea(temp)
    }
    function handleDelete(id){
        const temp =tarea.filter(item=>item.id!==id);
        setTarea(temp);

    }

    return (
        <div className="app">
            <h1 className="titulo">Aplicacion de Tareas con React</h1>
            <div className="todoContainer">
                <form className="todoCreateForm" onSubmit={handleSubmit}>
                    <input placeholder="Ingrese una tarea" className="todoInput" value={title} onChange={handleChange}/>
                    <input className="buttonCreate" type="submit" value="Crear Tarea" onClick={handleSubmit} />
                </form>

                <div className="todosContainer">
                    {
                        tarea.map(tarea=>(
                            <Todo key={tarea.id} tarea={tarea} onUpdate={handleUpdate} onDelete={handleDelete}/>
                        ))
                    }
                </div>
            </div>
        </div>
        
    );
}