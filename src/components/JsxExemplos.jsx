import React from 'react'

const JsxExemplos = () => {
    const userName = "Danilo";

    const user = {
        name: "Danilo",
        lastName: "Santos",
    };

  return (
    <div>
        <h2>Conteúdo que será visto</h2>

        <p>O nome do usuário é: {userName}</p>

        <p>O nome completo do usuário é: {user.name} {user.lastName}</p>

        <p></p>
    </div>
  )
}

export default JsxExemplos