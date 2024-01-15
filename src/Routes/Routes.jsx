import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllArticles from "../Pages/AllArticles/AllArticles";
import AddArticles from "../Pages/AddArticles/AddArticles";
import Subscription from "../Pages/Subsciption/Subscription";
import MyArticles from "../Pages/MyArticles/MyArticles";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AboutUs from "../Pages/DropDown/AboutUs";
import SignUp from "../Shared/SignUp/SignUp";
import Login from "../Shared/Login/Login";
import Users from "../Shared/Users/Users";
import Plans from "../Pages/Home/Plans/Plans";
import Private from "./Private";
import AdminRout from "./AdminRout";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allArticles",
        element:<AllArticles></AllArticles>
      },
      {
        path: "/addArticle",
        element: <Private><AddArticles></AddArticles></Private>
      },
      {
        path: "/subscription",
        element: <Private><Subscription></Subscription></Private>
      },
      {
        path: "/myArticle",
        element: <MyArticles></MyArticles>
      },
      {
        path: "/premium",
        element: <PremiumArticles></PremiumArticles>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      },
      
    {
      path:"/payment",
      element:<Plans></Plans>
    },
    

    ]
  },

    {
  path:"/dashboard",
  element:<Private><Dashboard></Dashboard></Private>,
  children:[
   
    {
      path: "dashboard/aboutUs",
      element: <AboutUs></AboutUs>
    },
  
    {
    path:"dashboard/signUp",
    element:<SignUp></SignUp>
    },
    {
      path:"dashboard/login",
      element:<Login></Login>
    },
    {
      path:"dashboard/users",
      element:<AdminRout><Users></Users></AdminRout>
    },
  
   


  ]

    }

]);




