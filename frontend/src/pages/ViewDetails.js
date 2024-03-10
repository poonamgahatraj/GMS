import { useState } from "react";


export default function ViewDetails ({selectedStudent,closePopup}){
    
function removePopup (){
    closePopup();
}
    return(
        <div>
         
             <div style={{border:"1px solid black",width:"75%",backgroundColor:"white" }}>
                <div style={{backgroundColor:"red",display:"flex",justifyContent:"End"}}>
                <button onClick={removePopup} style={{backgroundColor:"red",display:"flex",justifyContent:"flexEnd"}}>x</button>
                </div>
                
                 <p>Name :{selectedStudent.name}</p>
                 <p>Address :{selectedStudent.address}</p>
                 <p>DOB :{selectedStudent.dob}</p>
     
             </div>
  
        </div>
        

  


    )
}