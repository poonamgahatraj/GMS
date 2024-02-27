import axios from 'axios'

import { useState, useEffect } from 'react';

export default function StudentInfoPopup(){
    const [data,setData]=useState([])

    
    useEffect(()=>
    {
        try{
            axios
            .get('http://127.0.0.1:8000/api/getAll')
            .then((response) => {
                console.log(response.status);
                console.log(response.data.data);
               
                setData(response.data.data)
            })
        }
        
        catch(err)
        {
            console.log(err);
        }
    },[]);



   
    return(

   <div style={{border:"2px solid black",height:"150px",width:"200px"}}>
    <>
      <h1>i am student info Popup</h1>
      {
        data.map((item,index)=>{
            <p>{item.name}</p>
        })
      }

      </>
      
   </div>
   
    


    )
}