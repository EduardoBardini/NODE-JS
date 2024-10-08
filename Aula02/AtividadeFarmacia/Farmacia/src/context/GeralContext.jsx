import {useState, createContext} from "react"


export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const [ usuarioAgendado, setUsuarioAgendado ] = useState([])




    return(
        <GlobalContext.Provider value={{usuarioAgendado, setUsuarioAgendado}}>
            {children}
        </GlobalContext.Provider>
    )
}