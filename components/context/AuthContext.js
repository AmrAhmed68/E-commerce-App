import { Children, createContext, useContext, useEffect, useState } from "react";
import { auth } from './firebaseConf';

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({Children}) => {
    const [user , setUser] = useState()
    useEffect (() => {
        const currentUser =auth.onAuthStateChanged((authUser) => {
            setUser(authUser)
        })
        return currentUser
    } , [])

    // singup
    function register(email, password, phoneNumber) {
        return createUserWithEmailAndPassword(auth , email , password)
    }
    // singin
    function login(email , password) {
        return signInWithEmailAndPassword(auth , email , password)
    }
    // logout
    function logout() {
        return signout()
    }
    // Updating Email 
    function updateUserEmail(user , email) {
        return updateEmail(user , email)
    }
    // Updating Password 
    function updateUesrPassword(user , password) {
        return updatePasssword(user , email)
        
    }
    // Forget Password  
    function forgetPassword(email) {
        return sendPasswordRestEmail(auth , email)
    }

    return (
        <AuthContext.Provider value={{user , login , logout , register ,
         updateUesrPassword ,forgetPassword , updateUserEmail }} >
            {children}
        </AuthContext.Provider>
    )
}