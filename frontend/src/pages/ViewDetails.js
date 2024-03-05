export default function ViewDetails ({selectedStudent}){
    return(
        <div style={{border:"2px solid black",width:"20%" ,position:"absolute",left:"50%",top:"0"}}>
           
            <p>Name :{selectedStudent.name}</p>
            <p>Address :{selectedStudent.address}</p>
            <p>DOB :{selectedStudent.dob}</p>

        </div>

  


    )
}