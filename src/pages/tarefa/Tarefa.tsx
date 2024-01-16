import { useEffect, useState } from "react"

function Tarefa() {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if(completed){
            setTarefa('Parabéns, você concluiu a tarefa :D')
        }
    }, [completed]

    )
  return (
    <div>
        <h2>Componente Tarefa</h2>
        <p>Pressione o botão abaixo e conclua a tarefa</p>
        <button onClick = {() => setCompleted(true)}>Concluir tarefa</button>
        <h4>{tarefa}</h4>
        
    </div>
  )
}

export default Tarefa
