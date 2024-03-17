


export default function ViewDetails ({selectedStudent,closePopup}){
    
function removePopup (){
    closePopup();
}
    return(
        <div style={{height:"100%",width:"100%", display:"flex",justifyContent:"center",backgroundColor:"rgba(128, 128, 128, 0.5)",position:"fixed",top:"0",alignItems:"center"}}>
         
             <div style={{width:"30%", height:"30%",backgroundColor:"white" ,padding:"10px",borderRadius:"10px"}}>
                <div style={{display:"flex",justifyContent:"End"}}>
                <button onClick={removePopup} style={{backgroundColor:"red",display:"flex",justifyContent:"flexEnd"}}>x</button>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <p><b>Name :</b>{selectedStudent.name}</p>
                 <p><b>Address :</b>{selectedStudent.address}</p>
                 <p><b>DOB :</b>{selectedStudent.dob}</p>
                </div>
                 
     
             </div>
  
        </div>
        

  


    )
}