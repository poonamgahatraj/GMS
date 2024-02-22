import axios from 'axios'

function Info(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const formdata=Object.fromEntries(data);
    
    
    console.log('form data as object', formdata);
    
    try{
        axios.post('http://127.0.0.1:8000/api/create', {
            id:'',
            name: formdata.username,
           address: formdata.useraddress
          })
          .then(function (response) {
            console.log(response);
          })
    }

    catch(err)
    {
        console.log(err);
    }
   
}




export default function Form(){
    return(
        <form onSubmit={Info}>
        <label>Name :</label>
        <input type="text" placeholder="enter your name" name="username"></input><br></br>
        <label>id :</label>
        <input type="text" placeholder="enter your Id" name="userid" ></input><br></br>
        <label>Address :</label>
        <input type="text" placeholder="enter your Address" name="useraddress"  ></input><br></br>
        <button type="submit">Submit</button>

        </form>
    )
}