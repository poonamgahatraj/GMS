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
setShowForm(!showForm)
}

function closePopup(){
setShowPopup(false)
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
       {showPopup && <div style={{height:"100%",width:"100%",backgroundColor:"grey" ,border:"2px solid black",position:"absolute",top:"0",display:"flex",justifyContent:"center",alignItems:"center",opacity:"0.9"}}>
         <ViewDetails closePopup={closePopup} selectedStudent={selectedStudent} />
       </div>  } 

       {showForm && <div style={{height:"100%",width:"100%",backgroundColor:"grey" ,border:"2px solid black",position:"absolute",top:"0",display:"flex",justifyContent:"center",alignItems:"center",opacity:"0.9"}}>
       <NewForm />
       </div>}
        </>
    )
}