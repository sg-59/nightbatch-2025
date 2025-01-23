import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './single.css'
import Nav from '../componenet/Nav';
import {styled} from 'styled-components'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
} from 'mdb-react-ui-kit';

const MdbButton=styled(MDBBtn)`
  margin-left: 30%;
  background-color: #e3b90e;
  color: green;

`
const MDBModals=styled(MDBModalTitle)`
  color: green;
`

function Singlepage() {
    const a=useParams()
    const navigate=useNavigate()
    console.log(a.category);

    const [apiData,setApiData]=useState([])

    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () =>{
      setBasicModal(!basicModal)
    setTimeout(()=>{
navigate('/')
    },1000)
    }

 
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

<MdbButton onClick={toggleOpen}>Order Now</MdbButton>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
         
              <MDBModals>order successfull</MDBModals>

          
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
    </>
  )
}

export default Singlepage