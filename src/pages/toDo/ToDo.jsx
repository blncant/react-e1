/* import React, { useState } from "react";
import { BtnAdd, BtnDelete, Input, Container, Inputs} from "./ToDoStyles"
import { useToDoContext } from "../../context/ToDoProvider";

function ToDo() {
    const {items, addItem, deleteAll} = useToDoContext();

    const [newInput, setNewInput] = useState("");

	const formSubmit = (e) => {
		e.preventDefault();
        if (!newInput) {
			alert("Agregar una tarea");
			return;
		}
        addItem(newInput);
        setNewInput("");
	};

  return (
    
        <Container>
        <h1>To-Do List</h1>
		<h3>Añadir tareas</h3>
        <form onSubmit={formSubmit}>
					<Input
						type="text"
						placeholder="Escribir aqui..."
						value={newInput}
						onChange={(e) => setNewInput(e.target.value)}
					/>

					<BtnAdd title="Agregar" onClick={() => addItem()}>
						+
					</BtnAdd>
		</form>
        

		<Inputs>
			{items.map((item) => 
                (<li>{item}</li>)
            )}
		</Inputs>
        <BtnDelete title="Borrar" onClick={() => deleteAll()}> 🗑️ ELIMINAR TODO</BtnDelete>
        </Container>

  )
}

export default ToDo */