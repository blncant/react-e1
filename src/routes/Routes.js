import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import PokeApi from "../pages/pokeAPI/PokeApi";
// import ToDo from "../pages/toDo/ToDo";
import ToDoList from "../redux/ToDoList";

function Routes() {
	return (
		<ReactDomRoutes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/ToDo" element={<ToDo />} /> */}
			<Route path="/PokeApi" element={<PokeApi />} />
			<Route path="/src/redux/ToDoList" element={<ToDoList />} />
		</ReactDomRoutes>
	);
}

export default Routes;
