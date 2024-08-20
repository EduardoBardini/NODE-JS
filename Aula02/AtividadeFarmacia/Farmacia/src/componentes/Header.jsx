import './Header.css'



function Header(){
    return(
     <>
        <div className='app-header'>
            

            <div className='logo'>
                <img src='/farmaciaLogoPequeno.png' width={100} height={100}/>
                <h1>Farmárcia</h1>
            </div>
            <div className='categorias'>
               <label>Home</label>
               <label>Sobre nós</label>
               <label>Localizacão</label>
               <label>Atendimento</label>
               <label>Entrar</label>
            </div>

            








        </div>
     </>
    )
}


export default Header;