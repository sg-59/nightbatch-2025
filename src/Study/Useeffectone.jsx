import React, { useEffect, useState } from 'react'

function Useeffectone() {

  const [state,setState]=useState(0)


    useEffect(()=>{
      var i=0
const intervel=setInterval(()=>{
console.log(i++);
},1000)

return ()=>{
  console.log("cleanup function started");
  clearInterval(intervel)
}
    },[state])


  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState(state+1)}>Click</button>
    </div>
  )
}

export default Useeffectone