
import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {
  

  return (
    <>
    <h1>TESTE OS BOTÕES:</h1>
    <Home
      titulo = "Seja bem-vinde!"
      texto = "Você está logade."
    />
    <Contador />
    <Tarefa />
    </>
  )
}

export default App
