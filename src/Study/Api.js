import axios from "axios";

export const apiFetch=async()=>{
    try{
       const data=await axios.get('https://jsonplaceholder.typicode.com/users')
       console.log(data.data);

       return data.data
       }catch(err){
console.log(err.message);

    }
}