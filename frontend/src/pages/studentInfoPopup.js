import { useState } from "react"
import axios from "axios";




export default function StudentInfoPopup({data}){
   


   
    return(

   <div style={{border:"2px solid black"}}>
    <>
      <h1>Popup Component</h1>
    <ul>
       {data.map ((item,index)=>(
        <>
         <li>name :{item.name}</li> 
        <p>DOB :{item.dob}</p>
        <p>Address :{item.address}</p> 
        </>
       
       ))}
    </ul>
    

      </>
      
   </div>
   
    


    )
}