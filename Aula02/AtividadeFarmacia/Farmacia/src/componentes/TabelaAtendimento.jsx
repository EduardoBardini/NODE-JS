import { useContext } from "react"
import { GlobalContext } from "../context/globalContext"


function TabelaAtendimento(){
    
    const {usuarioAgendado} = useContext(GlobalContext);
    
    return(
        <div className="atendimentoTabela">
           <div>
            
           </div>
        </div>
    )
}