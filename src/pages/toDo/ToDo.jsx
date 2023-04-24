import React, { useState } from "react";
import { BtnAdd, BtnDelete, Input, Container} from "./ToDoStyles"

function ToDo() {
    const [newInput, setNewInput] = useState("");
	const [items, setItems] = useState([]);

	const formSubmit = (e) => {
		e.preventDefault();
	};

	function addItem() {
		if (!newInput) {
			alert("Agregar una tarea");
			return;
		}

		const item = {
			value: newInput,
		};

		setItems([...items, item]);
		setNewInput("");
	}

	const deleteAll = () => {
		setItems([]);
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

					<BtnDelete title="Borrar" onClick={() => deleteAll()}>
						🗑️
					</BtnDelete>

					<div className="list">
						{items.map((item) => {
							return (
								<div>
									<h3>{item.value}</h3>
								</div>
							);
						})}
					</div>
				</form>
    </Container>
  )
}

export default ToDo