import React from 'react'

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Show({pokemon}) {
  return (
    <div style={myStyle}>
        <a href="../">go back</a>
        <h1>Gotta Catch 'Em All</h1>
        <a href={`/update/${pokemon.id}`}>update</a>
        <br></br>
        <form action={`/delete/${pokemon.id}?_method=DELETE`}method="POST">
        <button type="submit">Delete</button>
        </form>
        <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src={`${pokemon.img}`} alt="" />
    </div>
  )
}

export default Show