import ViewDetails from "./ViewDetails";
import NewForm from "./form";
import { useState,useEffect } from "react";
import axios from "axios";



export default function StudentPopup(){


const [showPopup,setShowPopup]=useState(false);
const [showForm,setShowForm]=useState(false);

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


function showDetails(id){
   
    setShowPopup(true);
    if(!showPopup)

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

        
    


//function show_Popup(){
//    setShowPopup(!showPopup)
//}

function ShowForm (){
setShowForm(true)
}

function closePopup(){
setShowPopup(false)
}


    
      
    return (
        <>
        <button onClick={ShowForm}>Add Student</button>
        <h1>
                {studentList.map((item,index)=>(
                    <>
                    <div style={{border:"2px solid black",display:"flex",justifyContent:"space-between",width:"40%",marginBottom:"10px"}}>
                    <li   > {item.name}</li>
                    <button  onClick={() => showDetails(item.id)}>View Details</button>
                    
                    </div>
                    
                    </>
                
                ))}
        </h1>
       {showPopup &&  <ViewDetails onClose={closePopup} selectedStudent={selectedStudent} /> } 
       {showForm && <NewForm />}
        </>
    )
}