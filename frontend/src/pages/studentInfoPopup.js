import { useState } from "react"
import axios from "axios";




export default function StudentInfoPopup({selectedStudent}){
   
  if (!selectedStudent) {
    return <div>No student selected</div>;
  }

   
    return(

   <div style={{border:"2px solid black"}}>
    <>
      <h1>Popup Component</h1>
      <p>Name :{selectedStudent.name}</p>
      <p>Address :{selectedStudent.address}</p>
      <p>DOB :{selectedStudent.dob}</p>
    

      </>
      
   </div>
   
    


    )
}