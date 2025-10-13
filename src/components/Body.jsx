import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"

const Body = () => {
    return (
        <div className="  h-[100vh] flex">
            <Sidebar />
            <MainContainer />
            
        </div>
    )
}

export default Body