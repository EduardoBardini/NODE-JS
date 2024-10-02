import { useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GeralContext';
import './Body.css'


 



function Body(){

  
  const {usuarioAgendado, setUsuarioAgendado} = useContext(GlobalContext);
  

  
  

  const [inputNome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [data, setData] = useState();
  const [possuiPrioridade, setPossuiPrioridade] = useState();
  

  useEffect(() => {
    console.log(usuarioAgendado)
  },[usuarioAgendado])

  


  

  function realizarAgendamento(){
    

    
    let agendamento = {
      nome: inputNome ,
      telefone: telefone,
      data: data,
      prioritario: possuiPrioridade
    }

    
    alert("Agendamento realizado!");
    console.log(usuarioAgendado);

  }

  return(
   <div className='app-body'>
      <div className='msgBody'>
        <h1>Bem vindo, ao Farmárcia</h1>
        <p>Estamos muito felizes em anunciar a inauguração da nossa nova farmácia! Na farmárcia, nosso compromisso é proporcionar a você e sua família saúde e bem-estar com excelência e carinho.</p>
        <div className='div-button'>
         <button className='buttons-msgBody' type='button'>Logar-se</button>
         <button className='buttons-msgBody' type='button'>Buscar atendimento</button>
        </div>
      </div>

      <div className='agendamentoConsultaDiv'>
        <div className='agendamentoConsultaTable'>
          <h1>Agendamento</h1>
          <input value={ inputNome } onChange={ (e) => setNome(e.target.value) } className='inputs-agendamentoTable' type="text" placeholder='NOME' />
          <input value={ telefone } onChange={ (e) => setTelefone(e.target.value)} className='inputs-agendamentoTable' type="text" placeholder='TELEFONE'/>
          <input value={ data } onChange={ (e) => setData(e.target.value)} className='inputs-agendamentoTable' type='text' placeholder='DATA'/>
          <div className='radioButton'>
            <p>Prioridade: </p>
            <label>
             <input type='radio' name='tipoConta' value={ false }  checked={possuiPrioridade === false} onChange={(e) => setPossuiPrioridade(e.target.value)}/>
             <label>  Normal</label>
            </label>
            <label>
            <input type='radio' name='tipoConta' value={ true }  checked={possuiPrioridade === true} onChange={(e) => setPossuiPrioridade(e.target.value)}/>
              <label>  Preferencial</label>
            </label>
          </div>
          <button onClick={realizarAgendamento} className='button-agendamento'>Agendar</button>
          
        </div>
      </div>
    </div>
  )
}


export default Body;