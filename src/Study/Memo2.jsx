import React from 'react'

function Memo2({data}) {


data()
    console.log("child component re-rendered ");
    

  return (
    <div>
      <h1>Memo 2 </h1>
    </div>
  )
}

// export default Memo2
export const Memoized=React.memo(Memo2)