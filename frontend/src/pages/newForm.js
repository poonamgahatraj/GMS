import axios from 'axios'

import { useState } from 'react';

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
          })
    }

    catch(err)
    {
        console.log(err);
    }
   
}

function closeForm(){
    setCloseForm(false)
}




export default function NewForm(){

   
    return(
        <div style={{border:"1px solid black", width:"20%"}}>
            <h1>Add Student</h1>
        <form onSubmit={Info} style={{height:"200px", backgroundColor:"greenyellow"}}>
        
        
        <label>Name :</label><br></br>
        <input type="text" placeholder="enter your name" name="username"></input><br></br>
        <label>id :</label><br></br>
        <input type="text" placeholder="enter your Id" name="userid" ></input><br></br>
        <label>Address :</label><br></br>
        <input type="text" placeholder="enter your Address" name="useraddress"  ></input><br></br>
        <div style={{display:"flex"}}>
        
        <button onClick={closeForm}>Close</button>
        </div>
        
        </form>
        </div>
       
    )
}