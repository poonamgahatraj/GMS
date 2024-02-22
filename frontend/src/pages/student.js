import axios from 'axios'


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Student (){
    const [studentList,setStudentList] = useState([]);
    const [open,setopen] = useState(true);
    const navigate = useNavigate();
   
    
    useEffect(()=>
    {
        try{
            axios
            .get('http://127.0.0.1:8000/api/getAll')
            .then((response) => {
                console.log(response.status);
                console.log(response.data.data);
                setStudentList(response.data.data)
            })
        }
        
        catch(err)
        {
            console.log(err);
        }
    },[]);

function get_studentinfo(id){
    
    navigate('/s/'+id);


    }

    function show_popup(){
            if (open){
               alert("hello")
                    
                        
                    }
                }
            
    
    



    return (
            <>
            <h1>
                    {studentList.map((item,index)=>(
                        <>
                        <li onClick={()=>get_studentinfo(item.id)}> {item.name}</li>
                        </>
                    
                    ))}
                </h1>
                <button onClick={show_popup}>Click</button>
            </>
       )

    }
