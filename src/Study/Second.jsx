import React, { useContext } from 'react'
import { Appcontext } from './Store'

function Second() {


  const {user}=useContext(Appcontext)

  return (
    <div>
 
     <h1>Second page</h1>
     {user?.map((li)=>(
      <>
      <h6>{li.name}</h6>
      </>
     ))}
    </div>
  )
}

export default Second
