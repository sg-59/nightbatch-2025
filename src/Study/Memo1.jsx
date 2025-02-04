import React, { useCallback, useMemo, useState } from 'react'
import { Memoized } from './Memo2';



function Memo1() {

    const [number1,setNumber1]=useState(0)
    const [number2,setNumber2]=useState(0)

    console.log("parent componenet re-rendered");

function display(){
  console.log("hello");
  
}

const displaymemoization=useCallback(display,[number2])
    

  return (
    <div>

      <button onClick={()=>setNumber1(number1+1)}>Number one <strong>{number1}</strong></button>
      <button onClick={()=>setNumber2(number2+1)}>Number two <strong>{number2}</strong></button>
<Memoized  data={displaymemoization}/>
    </div>
  )
}

export default Memo1
