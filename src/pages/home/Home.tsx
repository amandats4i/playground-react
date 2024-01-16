import { useState } from "react";

interface homeProps {
  titulo: string;
  texto: string;
}

function Home(props: homeProps) {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
      {
        isLogged ? (

          <div style={{
            textAlign: "center"
          }}>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
          </div>
        ) : (
          <div style={{
            textAlign: "center"
          }}>
            <h5>Login</h5>
            <button onClick={() => setIsLogged(true)}>Entrar</button>
          </div>
        )} 
        
    </>

  )
}


export default Home
