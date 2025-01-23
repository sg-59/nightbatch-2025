import React, { useReducer, useState } from 'react'

function Usereducerone() {

    const initialValue={
        value:0,
        color:"red",
        bgcolor:"orange"

    }

    function display(state,action){

        console.log(action);

        switch(action.type){
            case "increment":
               return {value:state.value+1,bgcolor:"darkred"}
        }
 }

 
const [state,dispatch]=useReducer(display,initialValue)

  return (
    <div>
        <h1 style={{color:state.value%2==0 ? "green" : "blue",backgroundColor:state.bgcolor}}>{state.value}</h1>
        <button onClick={()=>dispatch({type:"increment",color:"green"})}>Click one</button>
    </div>
  )
}

export default Usereducerone