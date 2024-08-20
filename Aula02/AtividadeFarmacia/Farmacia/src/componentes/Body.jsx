import './Body.css'

function Body(){
  return(
   <div className='app-body'>
     <div className='msgBody'>
        <h1>Bem vindo, ao Farmárcia</h1>
        <p>Agora renovada e pronta para lhe atender 24 horas por dia com respeito e dignidade, com os melhores preços da região</p>
        <div className='div-button'>
         <button className='buttons-msgBody' type='button'>Logar-se</button>
         <button className='buttons-msgBody' type='button'>Buscar atendimento</button>
        </div>
        
     </div>




   </div>
  )
}


export default Body;