import ViewDetails from "./ViewDetails";
import { useState,useEffect } from "react";
import axios from "axios";


export default function StudentPopup(){
const [showPopup,setShowPopup]=useState(false);

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

function multiple_function(item){
    show_Popup();
    handleClick(item.id)
}

function show_Popup(){
    setShowPopup(!showPopup)
}




    
      
    return (
        <>
        <h1>
                {studentList.map((item,index)=>(
                    <>
                    <div style={{border:"2px solid black",display:"flex",justifyContent:"space-between",width:"40%"}}>
                    <li   > {item.name}</li>
                    <button   onClick={multiple_function}>View Details</button>
                    
                    </div>
                    
                    </>
                
                ))}
        </h1>
       {showPopup && <ViewDetails selectedStudent={selectedStudent} /> } 
        </>
    )
}