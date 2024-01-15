

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const { createUser } = useContext(AuthContext)








    const notify = () => toast("user successfully created");

    const [errorRegister, setErrorRegister] = useState('');
    const [passcode, setPasscode] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);


    const handleCheckboxChange = () => {
        setTermsAccepted(!termsAccepted);
    };


    const handleForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name);
        setErrorRegister('')
        setPasscode('');


        if (password.length < 6) {
            setErrorRegister('password should be at least 8 character or more');
            return;
        }
        else if (!/[a-zA-Z0-9]/.test(password)) {
            setErrorRegister('Please complete the requirement');
            return;
        }
        else if (!termsAccepted) {
            setErrorRegister('please accept our term and condition')
            return;
        }


        createUser(email, password, name)
            .then(result => {
                console.log(result.user)
                Navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }






    return (
        <div className="w-[600px] translate-x-80 shadow-lg h-[500px] rounded-md mb-20 ">
            <ToastContainer />
            <div className="mx-auto mt-40 md:w-1/2 logo">
                <h1 className="text-3xl mb-4 font-semibold text-center">Please Register</h1>
                <form onSubmit={handleForm}>
                    <div>

                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-sans">You Name</label>
                            <input
                                type="name"
                                id="name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="your name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">enter password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="your password"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            />

                            <div className="flex mt-4">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={handleCheckboxChange}
                                />
                                <div>I accept the terms and conditions</div>
                            </div>

                        </div>

                        <div className="mb-6">
                            <input type="submit"  onClick={notify} value="Sign Up" className="mx-28 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" />
                            
                        </div>
                    </div>
                </form>
                {
                    errorRegister && <p className="mt-6 text-red-600 text-3xl">{errorRegister}</p>
                }
                {
                    passcode && <p className="text-green-500">{passcode}</p>
                }

                <span className="mt-8 font-semibold"> Already have an account? <Link to="/login" className="font-bold">Login</Link></span>
            </div>

        </div>
    );
};

export default SignUp;