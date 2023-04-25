import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToDoProvider } from "./context/ToDoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<BrowserRouter>
			<ToDoProvider>
				<App />
			</ToDoProvider>
		</BrowserRouter>
	</>
);
