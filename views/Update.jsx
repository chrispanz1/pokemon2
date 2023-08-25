import React from 'react'

function Update(props) {
    
  return (
    <div>
        <form action={`/updatesubmit/${props.pokemon.id}?_method=PUT`} method="POST">
            name: <input type="text" name="name" defaultValue={props.pokemon.name} />
            <br></br>
            image: <input type="text" name="img" defaultValue={props.pokemon.img}/>
            <br></br>
            <input className='inputSubmit' type="submit" name="" value="update" />
        </form>
    </div>
  )
}

export default Update