import axios from 'axios'



export default function StudentInfoPopup({data}){
   


   
    return(

   <div style={{border:"2px solid black",height:"150px",width:"200px"}}>
    <>
      <h1>i am student info Popup</h1>
    <ul>
        <li>{data.name}</li>
        <li>{data.dob}</li>
        <li>{data.address}</li>

    </ul>

      </>
      
   </div>
   
    


    )
}