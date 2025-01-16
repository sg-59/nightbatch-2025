import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{width:"100%",height:"50px",backgroundColor:"blue"}}>
         <Link to={'/cartpage'}><button>cart</button></Link>
    </div>
  )
}

export default Navbar
