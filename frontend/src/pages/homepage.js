import { Outlet, Link } from "react-router-dom";

import { useHistory } from 'react-router-dom';


export default function Home (){
    return(
        <>
       
        <button>  
            <Link to="/Form">Home</Link>
            </button>
        <button>
            
        <Link to="/Student">Student</Link>
            </button>

            <button>
            
            <Link to="/s">StudentInfo</Link>
                </button>
        <Outlet />
        </>
    )
}