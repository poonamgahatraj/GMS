import ViewDetails from "./ViewDetails";
import EditForm from "./editForm";
import Form from "./form";
import { useState,useEffect } from "react";
import axios from "axios";



export default function StudentPopup(){


const [showPopup,setShowPopup]=useState(false);
const [showForm,setShowForm]=useState(false);

const [studentList,setStudentList] = useState([]);
const [selectedStudent,setSelectedStudent]=useState({});


const[editForm,setEditForm]=useState(false)
const [studentId, setStudentId] = useState(null);










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
},[]


);


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

function deleteStudent(id){
    alert("are you sure you want to delete??")
try{
    axios
    .delete('http://127.0.0.1:8000/api/'+id+'/delete')
    .then(response => {
       console.log(response)
        setStudentList(studentList => studentList.filter(item => item.id !== id));
      console.log('Student deleted successfully');
    })

}
    catch(error){
       console.log(error)
      }

}

function editStudent(id){
  setEditForm(true)

  setStudentId(id);


   
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
                    <div>
                    <button onClick={() => deleteStudent(item.id)}>Delete student</button>
                    <button onClick={()=>editStudent(item.id)}>Edit</button>
                    </div>
                    
                   
                    </>
                   
                   
                    
                ))}
        </h3>
       {showPopup && 
         <ViewDetails closePopup={closePopup} selectedStudent={selectedStudent} />
         } 

       {showForm && 
       <Form removeForm={removeForm} /> }

     {
        editForm &&  <EditForm studentId={studentId}
        setEditForm={setEditForm}/> 
     } 
        </>
    )
}