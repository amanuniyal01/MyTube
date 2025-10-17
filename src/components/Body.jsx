import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"

const Body = () => {
    return (
        <div className="  h-[100vh] flex">
            <Sidebar />
            <Outlet />

        </div>
    )
}

export default Body