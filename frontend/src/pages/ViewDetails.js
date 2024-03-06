import { useState } from "react";


export default function ViewDetails ({selectedStudent}){
    const [isVisible,setIsVisible]=useState(true)
function closePopup (){
    setIsVisible(false)
}
    return(
        <div>
            {isVisible && (
                <div style={{border:"2px solid black",width:"20%" ,position:"absolute",left:"50%",top:"0"}}>
                <button onClick={closePopup} style={{backgroundColor:"red",display:"flex",justifyContent:"flexEnd"}}>x</button>
                 <p>Name :{selectedStudent.name}</p>
                 <p>Address :{selectedStudent.address}</p>
                 <p>DOB :{selectedStudent.dob}</p>
     
             </div>
     
            )

            }
            
        </div>
        

  


    )
}