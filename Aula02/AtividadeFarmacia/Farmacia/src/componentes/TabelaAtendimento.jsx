<<<<<<< HEAD
import '../componentes/TabelaAtendimento.css'
=======
import { useContext } from "react"

import { GlobalContext } from "../context/GeralContext"
>>>>>>> 98a46ce957d8d8354a2e0ab8ba8627ca2d67bcb0

function TabelaAtendimento(props){
    
    
<<<<<<< HEAD
=======
    const { usuarioAgendado, setUsuarioAgendado } = useContext(GlobalContext);
>>>>>>> 98a46ce957d8d8354a2e0ab8ba8627ca2d67bcb0
    
    let usuarios = []
    usuarios.push(usuarioAgendado);
    console.log(usuarios);
    

    return(
        <div className="atendimentoTabela">
<<<<<<< HEAD
           <p>PACIENTE {props.posicao}</p>
           <p>Nome: {props.nome}</p>
           <p>Telefone: {props.telefone}</p>
           <p>Data: {props.data}</p>
           <p>Prioritario: {props.prioritario}</p>
=======
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
>>>>>>> 98a46ce957d8d8354a2e0ab8ba8627ca2d67bcb0
        </div>
    )
}

export default TabelaAtendimento;