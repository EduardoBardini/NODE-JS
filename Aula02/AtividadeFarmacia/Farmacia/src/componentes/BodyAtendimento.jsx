import './BodyAtendimento.css'
import { useState } from "react";
import TabelaAtendimento from './TabelaAtendimento';

function BodyAtendimento(){
    
    
    
    return(
        <div className="divAtendimentoContainer">
           <div className="divFilaAtendimento">
              <h1>FILA DE ATENDIMENTO</h1>
              <div>
                <TabelaAtendimento />
              </div>
              
           </div>
           <div className='divPainelAtendimento'>
              <h1>PAINEL DE ATENDIMENTO</h1>

              <button className='buttonAtender'>Atender</button>
           </div>
        </div>
    )
}

export default BodyAtendimento;