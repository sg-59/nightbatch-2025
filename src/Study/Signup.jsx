import React, { useState } from 'react'
import { data } from 'react-router-dom'

function Signup() {
    const [data,setData]=useState({
        name:"",
        email:"",
        mobile:"",
        address:""
    })


function handleChange(event){
const {name,value}=event.target
setData({...data,[name]:value})


}
  

    function display(){
       
        console.log(data);
        
    }



  return (
    <div>
        <input type="text" placeholder='name' name='name' onChange={handleChange}/>
        <input type="text" placeholder='email' name='email' onChange={handleChange}/>
        <input type="text" placeholder='mobile' name='mobile' onChange={handleChange}/>
        <input type="text" placeholder='address' name='address' onChange={handleChange}/>
        <button onClick={display}>Submit</button>
    </div>
  )
}

export default Signup