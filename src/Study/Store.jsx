import { createContext, useState } from "react"
import { useReducer } from "react"

export const Appcontext=createContext()



export const Storepage=({children})=>{

    const InitialValue={
        userData:null
    }

    function display(state,action){
console.log("action values ..................",action);

switch(action.status){
    case "success":
        return {userData:action.apidata}
}


    }


    const [state,dispatch]=useReducer(display,InitialValue)


    console.log("final answer",state.userData);
    

    return(
        <>
       <Appcontext.Provider value={{dispatch,user:state.userData}}>
{children}
 </Appcontext.Provider>
        </>
    )
}
