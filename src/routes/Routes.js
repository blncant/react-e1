import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import PokeApi from "../pages/pokeAPI/PokeApi";
import ToDo from "../pages/toDo/ToDo";

function Routes() {
	return (
		<ReactDomRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/ToDo" element={<ToDo />} />
			<Route path="/PokeApi" element={<PokeApi />} />
		</ReactDomRoutes>
	);
}

export default Routes;
