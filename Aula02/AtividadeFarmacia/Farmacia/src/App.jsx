import './App.css'
import Header from './componentes/Header'
import Body from './componentes/Body'
import BodyAtendimento from './componentes/BodyAtendimento'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Body />
      <BodyAtendimento />
    </div>
  )
}

export default App