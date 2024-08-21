import './Body.css'

function Body(){

  function realizarAgendamento(){
    alert("Agendamento realizado!");
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
          <input className='inputs-agendamentoTable' type="text" placeholder='NOME' />
          <input className='inputs-agendamentoTable' type="text" placeholder='TELEFONE'/>
          <input className='inputs-agendamentoTable' type='text' placeholder='DATA'/>
          <button onClick={realizarAgendamento} className='button-agendamento'>Agendar</button>
        </div>
      </div>
    </div>
  )
}


export default Body;