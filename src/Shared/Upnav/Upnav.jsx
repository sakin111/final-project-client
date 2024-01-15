import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Upnav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleLogOut = () => {
    logOut()
      .then(() => console.log('user logged out'))
      .catch(error => console.error(error))
  }

  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <label htmlFor="dropdown-toggle" className="btn btn-circle swap swap-rotate">
          <input
            id="dropdown-toggle"
            type="checkbox"
            checked={isDropdownOpen}
            onChange={handleDropdownToggle}
            className="hidden"
          />
          <svg
            className={`swap-off fill-current ${isDropdownOpen ? 'hidden' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            {/* Your dropdown open SVG */}
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className={`swap-on fill-current ${!isDropdownOpen ? 'hidden' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            {/* Your dropdown close SVG */}
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {/* Dropdown content */}
        {isDropdownOpen && (
          <div className="dropdown-content bg-white p-6 hover:bg-slate-200 font-custom font-Noticia absolute top-12 left-0 z-50">
            {/* Your dropdown items */}
            <Link to="/aboutUs" className="block py-2 px-4 font-bold hover:bg-white rounded-md">About Us</Link>
            <Link to="" className="block py-2 px-4  font-bold hover:bg-white">Contact Us</Link>
            <Link to="" className="block py-2 px-4  font-bold hover:bg-white">Newsletter</Link>
            <Link to="" className="block py-2 px-4  font-bold hover:bg-white">Privacy Policy</Link>
            <Link to="" className="block py-2 px-4  font-bold hover:bg-white">Conference Hall</Link>
            <Link to="" className="block py-2 px-4  font-bold hover:bg-white">Archives</Link>

          </div>
        )}
      </div>
      <div className="navbar-center">
        <div className="font-custom font-monoton text-4xl">THE FOX FIRE</div>
      </div>
      <div className="navbar-end">
        {
          user ? <span className="flex justify-center items-center gap-4" >
            <a onClick={handleLogOut} className="btn btn-sm">sign out</a>
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-10">
                <span className="text-xl">D</span>
              </div>
            </div>
          </span>
            : <Link to='/login'>
              <button className="btn btn-sm">login</button>
            </Link>

        }
      </div>
    </div>
  );
};

export default Upnav;









