import React, { useRef } from 'react'

function Userefone() {

const name=useRef()
const email=useRef()
const mobile=useRef()
const address=useRef()

console.log("hello");


function display(){
const a=name.current.value
const b=email.current.value
const c=mobile.current.value
const d=address.current.value

console.log(a,b,c,d);

}

  return (
    <div>
        <input ref={name}  type="text" placeholder='name' />
        <input ref={email}  type="text" placeholder='email' />
        <input ref={mobile}  type="text" placeholder='mobile' />
        <input ref={address}  type="text" placeholder='address' />
        <button onClick={display}>Submit</button>

    
    </div>
  )
}

export default Userefone