import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./toDoSlice";
import AddToDo from "./AddToDo";
import { BtnDelete, Inputs } from "./ToDoListStyles";

export default function ToDoList() {
	const todos = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	return (
        <>
        <AddToDo/>
        <Inputs>
            {todos.map((todoItem)=>{
                return(
                <li key={todoItem.id}>
                    {todoItem.name}
                </li>)
            })
            }
        </Inputs>
        <BtnDelete onClick={()=>dispatch(deleteAll())}>Eliminar Todo</BtnDelete>
        </>
        
        

    )
}
