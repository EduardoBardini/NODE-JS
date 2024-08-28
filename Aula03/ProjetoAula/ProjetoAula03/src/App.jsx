
import { useState } from "react";

import Titulo from "./components/Titulo"
import Produto from "./components/Produto"
import './App.css'

function App() {

  const [inputNome, setInputNome] = useState("");
  const [inputDescricao, setInputDescricao] = useState("");
  const [inputPreco, setInputPreco] = useState("");
  const [inputId, setInputId] = useState("");
  
  

  function changeDescricao(event){
    setInputDescricao(event.target.value);
  }

  function changeName(event){
    setInputNome(event.target.value);
    console.log(event.target.value);
  }
  
  function registerProduct(){
    let produto = {
      id: Date.now(),
      nome: inputNome,
      descricao: inputDescricao,
      preco: inputPreco,
      peso: 1,
    }

    setProdutos([...produtos, produto]);
  }
   const [produtos, setProdutos] = useState(
    [
      {
       id: Date.now(),
       nome: "Sandalha de praia",
       descricao: "serve para andar",
       preco: 12,
       peso: 25
      },
      {
       id: Date.now() + 1,
       nome: "Cadeira smartBeach",
       descricao: "Serve para conseguir dinheiro",
       preco: 25,
       peso: 1
      }
    ]
   );

  
  

  let produto = {
    id: Date.now() - 1,
    nome: "Cadeira de praia",
    descricao: "Uma cadeira pra usar no canal",
    preco: 253,
    peso: 110
  }

  return (
    <>
      <div className="app-container">
        <Titulo texto={ "New Text "} emoji={"Emoji"}/>
        {/*<Produto produto={produto}/>*/}
        <div className="formCadastro">
          <h2>Cadastro de produto</h2>
          
          <label>Nome: </label>
          <input 
          value={ inputNome } 
          onChange={ changeName } 
          type="text" 
          />

          <label>Descrição: </label>
          <input 
           value={ inputDescricao }
           onChange={ changeDescricao }
           type="text"
          />
          
          <label>Preço: </label>
          <input 
           value={inputPreco}
           onChange={ (event) => setInputPreco(event.target.value) }
           type="text"
          />
         
        
        
        </div>
        <button onClick={ registerProduct }>Cadastrar</button>
        <div className="cards">
          {produtos.map( (p) => (
            <Produto produto={p} key={p.id}/>
          ) ) }
        </div>
      </div>
      
    </>
  )
}

export default App
