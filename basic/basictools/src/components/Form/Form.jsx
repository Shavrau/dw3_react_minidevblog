import React, { useState } from 'react'
var teste = 8 

const Form = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log('Ativou o evento');
  }
  const [x, setX] = useState(true)
    
  return (
    // <> </> -> Fragmento de código
    <>
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div>
           <button onClick={() => {console.log("Yes,Apertou em mim.")}}>Clique em mim tambem</button>
        </div>
        <div>
          <button onClick={() => {
            if(true){
              console.log("Isso não deveria acontecer!");
            }
          }}>Será que você clicaria aqui?</button>
        </div>
        <div>
          <h1>{x ? 'Renderizou bonitinho!' : 'Renderizou lindinho!'}</h1> 
        </div>
        <div>
          <button onClick={() => setX(!x)}>Clique Aqui</button>
        </div>
    </div>
    <div>
        <strong>Valor </strong>{teste}
        <button onClick={() => {teste =12; console.log(teste)}}>Aperte e Mude</button>
        <strong>Valor </strong>{teste}
    </div>
    </>
  )
}

export default Form