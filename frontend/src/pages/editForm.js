import { useEffect, useState } from "react";
import axios from "axios";




export default function EditForm({ studentId,setEditForm,studentList,handleAlert }){
    const [formData, setFormData] = useState({
      name: '',
      address: '',
      id: studentId
    });
   

    useEffect(() => {
        if (studentList) {
          setFormData({
            name: studentList.name,
            address:studentList.address
           
          });
        }
      }, [studentList]);
    
    
    
   function handleInputChange (e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
       
           
         
     
    };

    function updateData (){
        
      
        try {
           axios.put(`http://127.0.0.1:8000/api/edit`, { id: studentList.id, ...formData })
           .then(function (response) {
            console.log(response);
            if (!response.data.error) {
            
             setEditForm(false)
             
            }
            else{
              alert("error")
            }
            })
          }
        catch (error) {
            console.error('Error updating student data:', error);
        }

    }



    


   
    return(
        <div style={{border:"1px solid black", width:"30%",position:"absolute",top:"0",left:"50%", backgroundColor:"#0BCBD5",borderRadius:"20px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Edit Student Details</h1>
            </div>
           <div style={{padding:"15px"}}>
           <form  style={{height:"200px", backgroundColor:"#0BCBD5"}}>
        
        
        <label>Name </label><br></br>
        <input type="text" placeholder="enter your name" name="name"  value={formData.name} onChange={handleInputChange} style={{width:"100%",height:"20px"}}></input><br></br>
        
        <label>Address </label><br></br>
        <input type="text" placeholder="enter your Address" name="address" value={formData.address } onChange={handleInputChange}  style={{width:"100%" ,height:"20px"}}></input><br></br>

       
        <div style={{display:"flex",marginTop:"20px"}}>
        <button onClick={updateData} style={{backgroundColor:"#0B59C9", border:"none", height:"35px", borderRadius:"20px", color:"white"}}>Update Form</button>

      
        </div>
        
        </form>
            </div> 
        
        </div>
         
    )


}
