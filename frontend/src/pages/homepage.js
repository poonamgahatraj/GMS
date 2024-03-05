import { Outlet, Link } from "react-router-dom";
import Info from "./props";





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

                <button>  
            <Link to="/StudentPopup">click me</Link>
            </button>
       
        <Outlet />
       
      
        </>
    )
}