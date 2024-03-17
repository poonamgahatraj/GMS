import axios from 'axios'
import { useState } from 'react';



export default function Form({removeForm}){
    
    const[submitted,setSubmitted]=useState(true);

    
function Info(event){

   

    event.preventDefault();
    const data = new FormData(event.target);
    const formdata=Object.fromEntries(data);
    
    
    console.log('form data as object', formdata);
    
    try{
        axios.post('http://127.0.0.1:8000/api/create', {
            id:'',
            name: formdata.username,
           address: formdata.useraddress
          })
          .then(function (response) {
            console.log(response);

            var responseMessage = response.data.error;

            if (responseMessage === false) {
               
                setSubmitted(false)

               

            }
            document.body.style.overflow="auto"
          })
    }

    catch(err)
    {
        console.log(err);
    }

  
   
}



function closeForm(){

    removeForm();
}
    return(
        <>{submitted && (
            <div style={{height:"100%",width:"100%",backgroundColor:"rgba(128, 128, 128, 0.5)" ,position:"absolute",top:"0",display:"flex",justifyContent:"center",alignItems:"center",opacity:"0.9"}}>
            <div style={{ width:"25%",backgroundColor:"white",borderRadius:"20px"}}>

<form onSubmit={Info}>
    <div style={{display:"flex", justifyContent:"center", backgroundColor:"#058CCF", color:"white"}}>
        <h3>Student Form</h3>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
        <img src="./userIcon.jpg" style={{height:"30px",width:"30px"}}></img>
    </div>

  <div style={{padding:"20px"}}>
  <label>Name </label><br></br>
<input type="text" placeholder="enter your name" name="username" style={{width:"100%",height:"30px"}}></input><br></br>
<label>Id </label><br></br>
<input type="text" placeholder="enter your Id" name="userid" style={{width:"100%" ,height:"30px"}} ></input><br></br>
<label>Address </label><br></br>
<input type="text" placeholder="enter your Address" name="useraddress" style={{width:"100%" ,height:"30px"}} ></input><br></br>
<div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
<button type="submit" style={{backgroundColor:"#3BBDF5",border:"none",width:"35%",height:"30px",borderRadius:"20px"}}>Submit</button>
<button onClick={closeForm} style={{backgroundColor:"red" ,border:"none",width:"35%",height:"30px",borderRadius:"20px"}}>Cancel</button>
    </div> 


</div>


</form>
</div>
</div>
        )
         
}
        </>
       
       
    )
}