/* import { createContext, useContext, useState } from "react";

const ToDoContext = createContext()
export const useToDoContext = () => useContext(ToDoContext)

export function ToDoProvider ({children}) {
    
    const [items, setItems] = useState([]);

    const addItem = (newInput) => {
		setItems([...items, newInput]);
	}

	const deleteAll = () => {
		setItems([]);
	};


    return (
        <ToDoContext.Provider value={{ items, addItem, deleteAll }}>
            {children}
        </ToDoContext.Provider>
    )
}

 */