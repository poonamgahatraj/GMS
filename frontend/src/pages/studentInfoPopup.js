



export default function StudentInfoPopup({data}){
   


   
    return(

   <div style={{border:"2px solid black",height:"150px",width:"200px"}}>
    <>
      <h1>i am student info Popup</h1>
    <ul>
       {data.map ((item,index)=>(
        <>
        <li>name :{item.name}</li>
        <li>address :{item.address}</li>
        </>
        
       ))}
    </ul>

      </>
      
   </div>
   
    


    )
}