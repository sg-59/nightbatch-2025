import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Appcontext } from './Store'
import { Link } from 'react-router-dom'
function First() {

  const datasss=[{name:"rajeena",job:"mernstack"},{name:"gopika",job:"Backend developer"}]

  localStorage.setItem("Rajeena",JSON.stringify(datasss))

  const getData=JSON.parse(localStorage.getItem("Rajeena")) 
console.log("*******************************99",getData);



 const {dispatch}=useContext(Appcontext)
 const [number,setNumber]=useState(0)

  const [datas,setData]=useState([])

  useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
  console.log(data.data);
 setData(data.data)
  dispatch({status:"success",apidata:data.data})
})
  },[])

  return (
    <div>
{datas.map((li)=>(
  <>
  <h4>name : {li.username}</h4>
  <h5>Email :{li.email}</h5>
  </>
))}
<Link to={'/second'}>Second page</Link>
<br></br>
<br></br>
<br></br>
<br></br>
<Link to={'/third'}>Third page</Link>

<h1>{number}</h1>
<button onClick={()=>setNumber(number+1)}>click</button>
 </div>
  )
}

export default First
