import { useEffect, useState } from "react"
import axios from 'axios'
import './home.css'
import Nav from "../componenet/Nav";
import { Link } from "react-router-dom";
import {styled} from 'styled-components'

const Main=styled.div`
    width: 100%;
    min-height: 700px;
    background-color: rgb(70, 70, 70);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Image=styled.img`
    border-radius: 50%;
`


function Home(){


 const [apiData,setApiData]=useState([])

 
 async function hello(){
    console.log("useeffect function caling................");
    const a=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    console.log(a.data.categories);
    setApiData(a.data.categories)
 
}

useEffect(function(){
  hello()
  
},[])




   return(
    <>
    <Nav/>
        <Main>
{apiData.map((data)=>(
  <Link to={`/singlepage/${data.strCategory}`}> <div className="sub">
    <h2 className="title">{data.strCategory}</h2>
    <Image  src={data.strCategoryThumb} alt="" />
    </div>
    </Link> 
))}
        </Main>
        </>
       
    )
}

export default Home