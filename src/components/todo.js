import { useState } from "react";


export default function Todo({tarea, onUpdate, onDelete}){

    const [isEdit, setIsEdit]=useState(false);


    function FormEdit(){
        const [newValue,setNewValue]=useState(tarea.title);

        function handleClick(e){
            onUpdate(tarea.id,newValue)
            setIsEdit(false);
        }

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value=e.target.value;
            setNewValue(value);
        }

        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
                <button className="button" onClick={handleClick}>Actualizar</button>
            </form>
        );
    }

    function TodoElement(){
        return (
            <div key={tarea.id} className="todoInfo">
                <span className="todoTitle">{tarea.title}</span>
                <button className="button" onClick={()=>setIsEdit(true)}>Editar</button>
                <button className="buttonDelete" onClick={()=>onDelete(tarea.id)}>Eliminar</button>
            </div>
        );
    }

    return (
        <div className="todo">
            {isEdit? <FormEdit/>:<TodoElement/>}
        </div>
        
        
    );
}