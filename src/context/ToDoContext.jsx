import { createContext } from "react";

export const Contexto = createContext()

export const ContextProvider = ({children}) => {

    return (
        <Contexto.Provider 
        value={{}}>
            {children}</Contexto.Provider>
    )
}