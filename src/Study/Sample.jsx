import axios from 'axios'
import React, { useState } from 'react'
import { apiFetch } from './Api';

function Sample() {

    const [state,setState]=useState([])

function display(){
apiFetch().then((data)=>{
    setState(data)
})

}

  return (
    <div>
{state.map((li)=>(
    <>
    <h1>{li.name}</h1>
    </>
))}
      <button onClick={display}>click</button>
    </div>
  )
}

export default Sample
