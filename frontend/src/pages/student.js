import axios from 'axios';



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StudentInfoPopup from './studentInfoPopup';




export default function Student (){
    const [studentList,setStudentList] = useState([]);
    const [selectedStudent,setSelectedStudent]=useState({});
    
   
    
   
    
  
    
    useEffect(()=>
    {
        try{
            axios
            .get('http://127.0.0.1:8000/api/getAll')
            .then((response) => {
                console.log(response.status);
                console.log(response.data.data);
                setStudentList(response.data.data);
               
                
            })
        }
        
        catch(err)
        {
            console.log(err);
        }
    },[]);

   
   function handleClick(id){

    console.log("check")
    try{
        axios
        .get('http://127.0.0.1:8000/api/'+id)
        .then((response) => {
            console.log(response.status);
            console.log(response.data.data);
            setSelectedStudent(response.data.data);
           
            
        })
    }
    
    catch(err)
    {
        console.log(err);
    }
}


    return (
            <>
            <h1>
                    {studentList.map((item,index)=>(
                        <>
                        <li key={item.id} onClick={() => handleClick(item.id)} > {item.name}</li>
                       
                        </>
                    
                    ))}
            </h1>
          
           < StudentInfoPopup selectedStudent={selectedStudent}  /> 
            </>
            
                
            
       )

    }
