import React, { useState } from "react";

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
    <div>
        <form onSubmit={formSubmit}>
					<input
						type="text"
						placeholder="Escribir aqui..."
						value={newInput}
						onChange={(e) => setNewInput(e.target.value)}
					/>

					<button title="Agregar" onClick={() => addItem()}>
						+
					</button>

					<button title="Borrar" onClick={() => deleteAll()}>
						🗑️
					</button>

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
    </div>
  )
}

export default ToDo