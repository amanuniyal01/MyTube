import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"


const Body = () => {
    const isDarkMode = useSelector((store) => store.theme.darkMode)
    return (
        <div className={`${isDarkMode?"bg-gray-800":"bg-white"} min-h-screen flex`}>
            <Sidebar />
            <Outlet />

        </div>
    )
}

export default Body