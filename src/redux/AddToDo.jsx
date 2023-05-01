import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './toDoSlice'
import { BtnAdd, Input } from './ToDoListStyles'


const AddToDo = () => {
    const [inputValue, setInputValue]= useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!inputValue) {
			alert("Agregar una tarea");
			return;
		}

        dispatch(
            addItem({
                item: inputValue
            }))
        setInputValue("")
    }

  return (
    <>
    
    <h3>Añadir tareas</h3>
    <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Escribir aqui..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <BtnAdd type="submit" title="Agregar">
                    +
                </BtnAdd>
    </form>
    </>
  )
}

export default AddToDo