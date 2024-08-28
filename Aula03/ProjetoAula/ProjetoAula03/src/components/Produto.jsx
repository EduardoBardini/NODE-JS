import './Produto.css'

function Produto(props){
    
    let p = props.produto;
    return(
        <div className="produto-container">
            {p.nome}
            <p>{p.descricao}</p>
            <p>Peso: {p.peso}</p>
            <p>R$ {p.preco}</p>
            <p>ID: {p.id} </p>
        </div>
    )
}

export default Produto;