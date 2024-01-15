import { NavLink, Outlet } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { FaFileSignature, FaHome, FaUsers } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {

const[ isAdmin, isAdminLoading ]= useAdmin()


if(isAdminLoading){
    <span className="loading loading-spinner loading-md"></span>
}


    return (
        <div className="flex">
        <div className="w-64 min-h-full bg-orange-400">
            <ul className="menu p-4 mt-5">

                {isAdmin ? (
                    <>
                        <li className="border-2 rounded-lg">
                            <NavLink to="dashboard/users">
                                <FaUsers /> Users
                            </NavLink>
                        </li>
                        <li className="border-2 rounded-lg">
                            <NavLink to="/">
                                <FaHome /> Home
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <div className="divider" />
                        <li className="border-2 rounded-lg">
                            <NavLink to="/">
                                <FaHome /> Home
                            </NavLink>
                        </li>
                        <li className="border-2 rounded-lg">
                            <NavLink to="dashboard/signUp">
                                <FaFileSignature /> SignUp
                            </NavLink>
                        </li>
                        <li className="border-2 rounded-lg">
                            <NavLink to="dashboard/login">
                                <LuLogIn /> Login
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </div>

        <div className="flex-1 mt-7 ml-4">
            <Outlet />
        </div>
    </div>
);
};

export default Dashboard;