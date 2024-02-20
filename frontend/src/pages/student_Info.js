import { Routes, Route, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios'


export default function StudentDetail(){

    const [studentData,setStudentData] = useState([]);

    useEffect(()=>
    {
        try{
            axios
            .get('http://127.0.0.1:8000/api/getAll')
            .then((response) => {
                console.log(response.status);
                console.log(response.data.data);
                setStudentData(response.data.data)
            })
        }
        
        catch(err)
        {
            console.log(err);
        }
    },[]);


    let { id } = useParams();

    console.log(id);
return(
    <>
     <h1>Hello World{id}</h1>
    {studentData.map((item,index)=>(
        <li >Name {item.name}</li>
    ))}
    </>
   
)
}