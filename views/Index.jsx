import React from 'react'
import pokemon from '../models/pokemon';

//const myStyle = {
    //color: '#ffffff',
    //backgroundColor: '#000000',
    //};

function Index({pokemon}) {
  
  return (
    <div>
        <h1>See all pokemon</h1>
        <h3>
          <a href="/add">add new pokemon</a>
        </h3>
        <h3>
          <a href="/adddata">add default data</a>
        </h3>
        <ul>
        {pokemon.length!=0?pokemon.map((p,i) => {
        
            return(
                <li key={i}>
                    <a href={`/pokemon/${p.id}`}>
                {/* {p.name[0].toUpperCase() + p.name.slice(1)} */}
                {p.name}
              </a>
                    </li>
            )
        }):""}
        </ul>
    </div>
  )
}

export default Index