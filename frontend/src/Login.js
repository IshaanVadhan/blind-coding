import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "./hooks";
import { auth, firestore } from './helpers/firebase';

function Login() {
    const location = useLocation();
    const {currentUser, setCurrentUser} = useAuth();
    // const {setAuth} = useAuth();
    const navigate = useNavigate();
    const params = useParams();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/company";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const isInvalid = password === "" || username === "";

    const resetInputFields = () => {
        setUsername("");
        setPassword("");
    }

    const isValidEmail = (username) => {
        return /\S+@\S+\.\S+/.test(username);
    }
    useEffect(() => {
        setError("");
    }, [username,password]);
    
    const handleLogin = async (event) => {
        event.preventDefault();
        if (!isValidEmail) {
            setError("Error: Invalid email!")
        }
        if (!currentUser?.email) {
            auth
            .signInWithEmailAndPassword(username, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                const docRef = firestore.collection("result").doc(user?.uid);
                docRef.get().then((doc) => {
                    if (!doc.exists) {
                        setCurrentUser({email: user?.email, accessToken: user?.refreshToken, id: user?.uid, slotID: params?.slotID});
                        navigate(`/${params?.slotID}/problem`);
                    }
                    else {
                        setError(`You have already made a submission!`)
                    }
                })
                
                // .where("email", "==", user?.email)
                // .get()
                // .then((querySnapshot) => {
                //     querySnapshot.forEach((doc) => {
                //         console.log(doc.data());
                //     })
                // })
                // .catch((error) => {
                //     setError(`Error: ${error}`);
                // });
            })
            .catch(error => setError(`Error: ${error.message}`))
        }
    }

    return (
        <>
        <Form>
            <Form.Title>LOG IN</Form.Title>
            <Form.Line />
            {error &&
            <Form.Error>
                Error: {error}
            </Form.Error>}
            <Form.Base onSubmit={handleLogin}>
                <Form.InputContainer>
                    <Form.Input type="text" id="username" autoComplete="off" placeholder=" " value={username} onChange={({target}) => setUsername(target.value)} />
                    <Form.Label htmlFor="username">Email</Form.Label>
                </Form.InputContainer>
                <Form.InputContainer>
                    <Form.Input type={(showPassword) ? "text" : "password"} id="password"  autoComplete="off" placeholder=" " value={password} onChange={({target}) => setPassword(target.value)} />
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Icon onClick={() => {setShowPassword(!showPassword)}}>
                        {(showPassword) ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </Form.Icon>
                </Form.InputContainer>
                <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
            </Form.Base>
        </Form>
        </>
    );
}

export default Login;
