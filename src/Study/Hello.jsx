import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiFetch } from './Api';

function Hello() {

    const [state,setState]=useState([])


    useEffect(()=>{
apiFetch().then((abc)=>{
    setState(abc)
})
    },[])
    

  return (
    <div>
    {state.map((li)=>(
        <>
        <h1>{li.name}</h1>
        </>
    ))}
    
        </div>
  )
}

export default Hello
