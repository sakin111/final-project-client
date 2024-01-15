import { Link } from "react-router-dom";


const NavBar = () => {

const nav =<>

<li><Link to="/" className="font-custom font-Noticia text-[17px] font-bold ">Home</Link></li>
<li><Link to="/addArticle" className="font-custom font-Noticia text-[17px] font-bold">Add Articles</Link></li>
<li><Link to="/allArticles" className="font-custom font-Noticia text-[17px] font-bold">All Articles</Link></li>
<li><Link to="/subscription" className="font-custom font-Noticia text-[17px] font-bold">Subscription</Link></li>
<li><Link to="/myArticle" className="font-custom font-Noticia text-[17px] font-bold">My Articles</Link></li>
<li><Link to="/premium" className="font-custom font-Noticia text-[17px] font-bold">Premium Articles</Link></li>
<li><Link to="/dashboard" className="font-custom font-Noticia text-[17px] font-bold">Dashboard</Link></li> {/* (if user is admin) */}

</>



  
    return (
        <div className="navbar bg-base-100 sticky w-full top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {nav}
            </ul>
          </div>
          <img src="https://i.ibb.co/xX4qfGs/561f70aa-f8ea-458d-ac6f-a52a4bdc5f3c-removebg-preview.png" alt="" className="w-12 h-12" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
       {nav}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default NavBar;