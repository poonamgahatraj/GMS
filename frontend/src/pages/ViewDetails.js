export default function ViewDetails ({selectedStudent}){
function closePopup (){
    setShowPopup(false)
}
    return(
        <div style={{border:"2px solid black",width:"20%" ,position:"absolute",left:"50%",top:"0"}}>
           <button onClick={closePopup}>x</button>
            <p>Name :{selectedStudent.name}</p>
            <p>Address :{selectedStudent.address}</p>
            <p>DOB :{selectedStudent.dob}</p>

        </div>

  


    )
}