import React, { useContext }  from 'react'
import { Appcontext } from './Store'


export default function Third() {

 const {user}= useContext(Appcontext)
    
  return (
    <div>
 <h1>Third page</h1>
 {user.map((li)=>(
  <>
  <h6>{li.name}</h6>
  <h6>{li.email}</h6>
  </>
 ))}
    </div>
  )
}
