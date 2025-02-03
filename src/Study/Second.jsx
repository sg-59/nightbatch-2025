import React, { useContext } from 'react'
import { Appcontext } from './Store'

function Second() {


  const {user,dispatch}=useContext(Appcontext)

  function removeDatas(){
dispatch({status:"remove"})
  }

  return (
    <div>
 
     <h1>Second page</h1>
     {user?.map((li)=>(
      <>
      <h6>{li.name}</h6>
      </>
     ))}

     <button onClick={removeDatas}>Remove data</button>
    </div>
  )
}

export default Second
