import { useState } from "react";


export default function ViewDetails ({selectedStudent,onClose}){
    
function removePopup (){
    onClose();
}
    return(
        <div>
         
                <div style={{border:"2px solid black",width:"20%" ,position:"absolute",left:"45%",top:"0"}}>
                <button onClick={removePopup} style={{backgroundColor:"red",display:"flex",justifyContent:"flexEnd"}}>x</button>
                 <p>Name :{selectedStudent.name}</p>
                 <p>Address :{selectedStudent.address}</p>
                 <p>DOB :{selectedStudent.dob}</p>
     
             </div>
     
          
            
        </div>
        

  


    )
}