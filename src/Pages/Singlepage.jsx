import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './single.css'
import Nav from '../componenet/Nav';
function Singlepage() {
    const a=useParams()
    console.log(a.category);

    const [apiData,setApiData]=useState([])

 
    async function hello(){
       console.log("useeffect function caling................");
       const a=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
       console.log("********************************************************",a.data.categories);
       setApiData(a.data.categories)
    
   }
   
   useEffect(function(){
     hello()
     
   },[])

   const filteredData=apiData.filter((li)=>{
return li.strCategory==a.category
   })
    
  return (
    <>
    <Nav/>
    <div className='singlepage'>
        {filteredData.map((li)=>(
            <>
            <h3>{li.strCategory}</h3>
            <img src={li.strCategoryThumb} alt="" />
            <p style={{color:"wheat"}}>{li.strCategoryDescription}</p>
            </>
        ))}
    </div>
    </>
  )
}

export default Singlepage