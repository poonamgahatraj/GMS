import axios from 'axios';



import { useState, useEffect } from 'react';

import StudentInfoPopup from './studentInfoPopup';




export default function Student (){
    const [studentList,setStudentList] = useState([]);
    const [data,setData]=useState([]);
   
    const [showStudentPopup,setShowStudentPopup]=useState(true)
   
    
   
    
    useEffect(()=>
    {
        try{
            axios
            .get('http://127.0.0.1:8000/api/getAll')
            .then((response) => {
                console.log(response.status);
                console.log(response.data.data);
                setStudentList(response.data.data);
                setData(response.data.data)
                
            })
        }
        
        catch(err)
        {
            console.log(err);
        }
    },[]);

    return (
            <>
            <h1>
                    {studentList.map((item,index)=>(
                        <>
                        <li onClick={() => setShowStudentPopup(!showStudentPopup)}> {item.name}</li>
                        <p>{item.address}</p>
                        </>
                    
                    ))}
            </h1>
          
             < StudentInfoPopup data={data} /> 
            </>
            
                
            
       )

    }
