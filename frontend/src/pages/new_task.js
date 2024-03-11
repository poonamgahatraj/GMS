import ViewDetails from "./ViewDetails";
import NewForm from "./form";
import Form from "./form";
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
   
    document.body.style.overflow="hidden"
   
    

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
document.body.style.overflow="hidden"
}

function closePopup(){
setShowPopup(false)
document.body.style.overflow="auto"

}

function removeForm(){
    setShowForm(false)
    document.body.style.overflow="auto"
}


    
      
    return (
        <>
        <button onClick={ShowForm}>Add Student</button>
        <h3>
                {studentList.map((item,index)=>(
                    <>
                    <div style={{border:"2px solid black",display:"flex",justifyContent:"space-between",width:"40%",marginBottom:"10px"}}>
                    <p  > {item.name}</p>
                    <button  onClick={() => showDetails(item.id)}>View Details</button>
                    
                    </div>
                    
                    </>
                
                ))}
        </h3>
       {showPopup && 
         <ViewDetails closePopup={closePopup} selectedStudent={selectedStudent} />
         } 

       {showForm && <div style={{height:"100%",width:"100%",backgroundColor: ("135deg", "#4F6AC7", "#C7438E") ,border:"2px solid black",position:"absolute",top:"0",display:"flex",justifyContent:"center",alignItems:"center",opacity:"0.9"}}>
       <Form removeForm={removeForm} />
       </div>}
        </>
    )
}