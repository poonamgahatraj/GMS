import axios from 'axios'


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Student (){
    const [studentList,setStudentList] = useState([]);
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

function Student_Info(){

    navigate('/s');
    }
    
    return (

      <h1>
        {studentList.map((item,index)=>(
            <li onClick={Student_Info}>Name {item.name}</li>
        ))}
      </h1>
    )
}