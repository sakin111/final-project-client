import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";






export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
const axiosPublic = useAxiosPublic()

    const createUser = (email, password,name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,name)
       
    }
    const signInUser = (email, password,name) => {
        return signInWithEmailAndPassword(auth, email, password,name)
    }


    const logOut = () => {
        return signOut(auth)
    }

     const googleSignIn = () =>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    
     }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post("/jwt", userInfo)
                .then(res =>{
                   if(res.data.token){
                    localStorage.setItem("access-token", res.data.token)
                   }
                })
            }
            else{
                localStorage.removeItem("access-token")
            }
            console.log('observing current user', currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])








    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signInUser,
        googleSignIn
      
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
