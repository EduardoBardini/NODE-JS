import '../componentes/TabelaAtendimento.css'

function TabelaAtendimento(props){
    
    
    
    let usuarios = []
    usuarios.push(usuarioAgendado);
    console.log(usuarios);
    

    return(
        <div className="atendimentoTabela">
           <p>PACIENTE {props.posicao}</p>
           <p>Nome: {props.nome}</p>
           <p>Telefone: {props.telefone}</p>
           <p>Data: {props.data}</p>
           <p>Prioritario: {props.prioritario}</p>
        </div>
    )
}

export default TabelaAtendimento;