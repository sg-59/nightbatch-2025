import React from 'react'

function Memo2({num2}) {

    console.log("child component re-rendered ");
    

  return (
    <div>
      <h1>Memo 2 {num2}</h1>
    </div>
  )
}

// export default Memo2
export const Memoized=React.memo(Memo2)