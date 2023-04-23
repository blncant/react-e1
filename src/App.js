import React from "react";
import "./App.css";

import ToDo from "./components/ToDo/ToDo";
import Layout from "./components/Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<div className="App">
			<Layout>
				<h1>To-Do List</h1>
				<h3>Añadir tareas</h3>
				<ToDo />
			</Layout>

			<GlobalStyles />
		</div>
	);
}

export default App;
