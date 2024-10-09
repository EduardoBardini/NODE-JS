import './BodyAtendimento.css'
<<<<<<< HEAD
import { GlobalContext } from '../context/GeralContext';
import { useState, useContext, useEffect } from "react";
import TabelaAtendimento from './TabelaAtendimento';



=======
import { useState } from "react";
import TabelaAtendimento from './TabelaAtendimento';
>>>>>>> 98a46ce957d8d8354a2e0ab8ba8627ca2d67bcb0

function BodyAtendimento(){
    
   const {usuarioAgendado, setUsuarioAgendado} = useContext(GlobalContext);
  
   useEffect(() => {
      console.log(usuarioAgendado)
   }, [usuarioAgendado])
   
   function atenderPaciente()   {

      let flagPassed = false;

      if(usuarioAgendado.length == 0){
         alert("Nenhum paciente esta na fila!")

      }else {
         let vetorTemp = [...usuarioAgendado];
         for(let i = 0; i < vetorTemp.length; i++){
            
          if(vetorTemp[i].prioritario == "Preferencial" && flagPassed == false){
            
            flagPassed = true
            alert("Paciente: " + vetorTemp[i].nome + " foi atendido na fila preferencial!");
            vetorTemp.splice(i, 1);

          }
         }
      
         if(!flagPassed){
            vetorTemp.shift();
            console.log("Paciente foi atendido na fila normal!");
         }
         
         setUsuarioAgendado(vetorTemp);
         // console.log(usuarioAgendado);
      }
      
      

   }
   
   
    
    return(
        <div className="divAtendimentoContainer">
           <div className="divFilaAtendimento">
<<<<<<< HEAD
              <div className='divTituloFila'>
               <h1>FILA DE ATENDIMENTO</h1>
              </div>
              
              <div className='divPacientes'>
               {usuarioAgendado.map( (usuario, index) => (
               <TabelaAtendimento  key={index} posicao={index+1} nome={usuario.nome} telefone={usuario.telefone} data={usuario.data} prioritario={usuario.prioritario}/>
              ))}
              </div>
              
              

=======
              <h1>FILA DE ATENDIMENTO</h1>
              <div>
                <TabelaAtendimento />
              </div>
              
>>>>>>> 98a46ce957d8d8354a2e0ab8ba8627ca2d67bcb0
           </div>
           <div className='divPainelAtendimento'>
              <h1>PAINEL DE ATENDIMENTO</h1>

              <button onClick={ atenderPaciente } className='buttonAtender'>Atender</button>
           </div>
        </div>
    )
}

export default BodyAtendimento;