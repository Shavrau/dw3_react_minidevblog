import React, { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(false)
  const [nome, setNome] = useState('Bruno')
  return (
    <>
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>se x for verdadeiro, sim!</p>}
      {!x && <p>Isso aqui é falso</p>}
    </div>
    <div>
      {nome === 'João' ? (
        <div>
          <p>o nome é João</p>
        </div>
      ) : (
        <div>
          <p>o nome não é João</p>
        </div>
      )}
    </div>
    </>
  )
}

export default ConditionalRender