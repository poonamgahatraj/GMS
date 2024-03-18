import { useState } from "react";
import axios from "axios";


export default function EditForm({formId}){
    const [formData, setFormData] = useState({
      Name: '', 
       Address: ''
     
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

function updateData(e){
 e.preventDefault();

        axios.put('http://127.0.0.1:8000/api/edit', formData, {
            headers: {
                'Content-Type': 'application/json',
                // Add any necessary authentication headers if required
                'Authorization': 'Bearer your_access_token', // Replace 'your_access_token' with the actual access token
            }
        })
        .then(response => {
            console.log('Form updated successfully:', response.data);
            // Optionally, you can add code here to handle success, like showing a success message to the user
        })
        .catch(error => {
            console.error('Error updating form:', error);
            // Optionally, you can add code here to handle errors, like showing an error message to the user
        });
    }
   
    return(
        <div style={{border:"1px solid black", width:"30%"}}>
            <h1>Edit Student Details</h1>
        <form onSubmit={updateData} style={{height:"200px", backgroundColor:"greenyellow"}}>
        
        
        <label>Name :</label><br></br>
        <input type="text" placeholder="enter your name" name="username" value={formData.username} onChange={handleInputChange}></input><br></br>
        
        <label>Address :</label><br></br>
        <input type="text" placeholder="enter your Address" name="useraddress" value={formData.useraddress} onChange={handleInputChange}  ></input><br></br>
        <div style={{display:"flex"}}>
        <button type="submit">Update Form</button>
        </div>
        
        </form>
        </div>
       
    )
}

