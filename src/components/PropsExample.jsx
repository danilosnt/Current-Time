import React from 'react'

const PropsExample = ({nome, tempo}) => {
  return (
    <div>
        <h3>Olá {nome}</h3>
        <p>Eu tenho {tempo} dias te esperando !</p>
    </div>
  )
}

export default PropsExample