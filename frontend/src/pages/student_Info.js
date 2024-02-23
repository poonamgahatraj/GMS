import { Routes, Route, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Popup_comp from './popup';


export default function StudentDetail(){

    const [studentData,setStudentData] = useState({});
    const [showPopup,setShowPopup]=useState(false)

    useEffect(()=>
    {
        try{
            axios
            .get('http://127.0.0.1:8000/api/'+id)
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

    function handleClick(){
        setShowPopup(true)
    }

    function removePopup(){
        setShowPopup(false)
    }



return(
    <>
     <h1>Hello World {id}</h1>
   <p>{studentData.name}</p>
   <button onClick={handleClick}>show Popup</button>
   <button onClick={removePopup}>remove Popup</button>


   {showPopup && <Popup_comp />}
  
    </>
   
)
}