import React, { useState, useEffect } from 'react';
import { auth, firestore } from "../helpers/firebase";

export const AuthContext = React.createContext({});

const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || {email: "",accessToken: ""});

    // useEffect(() => {
    //     console.log(currentUser);
    // }, [currentUser]);

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    // useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //     if(user) {
    //         firestore.collection("users")
    //         .where("email", "==", user?.email)
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 setCurrentUser(doc.data())
    //             })
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    //         // setCurrentUser(user);
    //     }
    //     else {
    //         setCurrentUser(null);
    //     }
    //     })
    // }, [auth]);
        
    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;