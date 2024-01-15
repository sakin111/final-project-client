import { signInWithEmailAndPassword } from "firebase/auth";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.config";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";




const Login = () => {

const {googleSignIn} = useAuth()

const axiosPublic = useAxiosPublic()

  const [errorRegister, setErrorRegister] = useState('');
  const [passCode, setPassCode] = useState('');

  const navigate = useNavigate()
  

  const handleLogin = (e) => {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email, password,name);
    setErrorRegister('');
    setPassCode('');

   
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email
         
        };
        axiosPublic.post('/users', userInfo)
        .then(res => {
          console.log(res.data);
          setPassCode('user login successful');
          e.target.reset();
          navigate('/')
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(error => {
      console.error(error);
    });
  };


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
         
        };
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/');
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(error => {
        console.error(error);
      });
  };






  return (
<div className="w-full max-w-sm p-4 bg-white border mt-20 translate-x-[470px] mb-20 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
  <form className="space-y-6" onSubmit={handleLogin}>
    <h5 className="text-2xl font-bold logo text-center text-gray-900 dark:text-white">Login</h5>
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">you Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="name"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="email"
        required
      />
    </div>
    <div>
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder=" password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        autoComplete="current-password"
        required
      />
    </div>
    <div className="flex items-start">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div>
    </div>
   <input type="submit" value="Login" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 translate-x-28"/>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <Link className="text-blue-700 hover:underline dark:text-blue-500" to="/signUp">Create account</Link>
    </div>
    <button onClick={handleGoogleSignIn} className="flex justify-center items-center gap-3 text-white bg-black w-24 p-2 rounded-full"><FaGoogle /> Google</button>
  </form>

  {errorRegister && (
    <p className="mt-6 text-red-600 text-xl font-custom rancho">{errorRegister}</p>
  )}
  {passCode && <p className="text-green-500">{passCode}</p>}
</div>

  );
};

export default Login;
