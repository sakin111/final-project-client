import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Upnav from "../../Shared/Upnav/Upnav";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Upnav></Upnav>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;