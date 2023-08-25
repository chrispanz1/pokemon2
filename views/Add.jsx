import React from 'react'

function Add() {
  return (
    <div>
        <form action="/addsubmit" method='POST'>
            name: <input type="text" name="name" />
            <br></br>
            image: <input type="text" name="img"/>
            <br></br>
            <input className='inputSubmit' type="submit" name="" value="Add Pokemon" />
        </form>
    </div>
  )
}

export default Add