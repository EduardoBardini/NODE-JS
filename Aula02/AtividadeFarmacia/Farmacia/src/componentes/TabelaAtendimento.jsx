import { useContext } from "react"

import { GlobalContext } from "../context/GeralContext"


function TabelaAtendimento(){
    
    const { usuarioAgendado, setUsuarioAgendado } = useContext(GlobalContext);
    
    let usuarios = []
    usuarios.push(usuarioAgendado);
    console.log(usuarios);
    

    return(
        <div className="atendimentoTabela">
           <div>
            
            {usuarios.map( (usuario, i) => (
                <li key={i}>
                <strong>Nome:</strong> {usuario.nome} <br />
                <strong>Telefone:</strong> {usuario.telefone} <br />
                <strong>Nascimento:</strong> {usuario.data} <br />
                <strong>Prioritario:</strong> {usuario.prioritario} <br />
                </li>
                
            ))}
            
            
           </div>
        </div>
    )
}

export default TabelaAtendimento;