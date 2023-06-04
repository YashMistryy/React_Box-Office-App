import { Outlet } from "react-router-dom"
// outlet allows us to render children components inside a layout
import Navbar from "./Navbar"






const MainLayout  = ()=>{
    return(

        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}
export default MainLayout