import { useState } from "react"

function Home(){

    const [num,setNum]=useState(100)

    console.log("re-rendered");
    

    function display(){
     setNum(num+1)
    }

    return(
        <>
<h1>Home page {num}</h1>
<button onClick={display}>Click</button>
        </>
       
    )
}

export default Home