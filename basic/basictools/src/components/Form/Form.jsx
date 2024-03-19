import React from 'react'
var teste = 8 

const Form = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log('Ativou o evento');
  }
  const renderButton = (x) => {
    if(x){
      return <h1>Renderizou Bonitinho!</h1>
    }
    else{
      return <h1>Renderizou Lindinho!</h1>
    }
  }
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
          {renderButton(true)}
          {renderButton(false)}
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