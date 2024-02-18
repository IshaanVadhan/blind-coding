import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./App.css"
import { probStates } from "./helpers/probStates";
import { auth, firestore, createUserDocument } from './helpers/firebase';
import { useAuth } from "./hooks";
import { Simulate } from 'react-dom/test-utils';

function Ide() {
    const buttonRef = useRef(null);
    const {currentUser} = useAuth();
    const [code, setCode] = useState("");
    // const [input, setInput] = useState("");
    const [lang, setLang] = useState("C++");
    const [result, setResult] = useState("");
    const [disableText, setDisableText] = useState(parseInt(localStorage.getItem('disable')) || false);
    const textarea = document.getElementById("code");
    const params = useParams();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const fullScreenRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    useEffect(() => {
        function onFullscreenChange() {
            setIsFullscreen(Boolean(document.fullscreenElement));
        }
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    useEffect(() => {
        // if (fullScreenRef.current) {
        //     fullScreenRef.current.requestFullscreen();
        // }
        function requestFullscreen() {
            if (fullScreenRef.current) {
                fullScreenRef.current.requestFullscreen();
            }
        }

        if (fullScreenRef.current) {
            fullScreenRef.current.addEventListener('click', requestFullscreen);
        }

        return () => {
            if (fullScreenRef.current) {
                fullScreenRef.current.removeEventListener('click', requestFullscreen);
            }
        }
    }, []);

    function enterFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen()
            .catch((error) => {
                console.error('Fullscreen request failed:', error);
            });
        } else {
            console.error('Fullscreen not supported');
        }
    }

    useEffect(() => {
        if (fullScreenRef.current) {
            enterFullscreen(fullScreenRef.current);
        } 
    }, []);

    var minutes = 15;
    const [seconds, setSeconds] = useState(parseInt(localStorage.getItem('ideSec')) || minutes * 60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(!result?.type) {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        buttonRef.current.click();
                        clearInterval(intervalId);
                        localStorage.setItem('codeTimer', 1);
                        return prevSeconds;
                    }
                    const newSeconds = prevSeconds - 1;
                    localStorage.setItem('ideSec', newSeconds);
                    return newSeconds;
                });
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [minutes, result]);
    
    const displaySeconds = (seconds % 60) < 10 ? `0${seconds % 60}` : (seconds % 60) ;
    const displayMinutes = Math.floor(seconds / 60) < 10 ? `0${Math.floor(seconds / 60)}` : (Math.floor(seconds / 60)) ;

    const prob = probStates.filter((item, index) => (index + 1) == params.slotID );

    const submitCode = (e) => {
        e.preventDefault();
        const data = { code: code, lang: lang };
        //console.log(data)
        axios
        .post("http://localhost:8080/compilecode", data)
        .then(function (response) {
            //console.log(response?.data);
            if (response?.data?.output || response?.data?.output === "") {
                // console.log("check: ", prob[0]?.outputCheck == response?.data?.output)
                if (prob[0]?.outputCheck == response?.data?.output && response?.data?.output !== "") {
                    setResult({type: "success", data: response?.data?.output, compileError: false});
                    createUserDocument(currentUser, {code, slotID: params.slotID, passed: true, lang});
                }
                else {
                    setResult({type: "error", data: response?.data?.output, compileError: false});
                    createUserDocument(currentUser, {code, slotID: params.slotID, passed: false, lang});
                }
            }
            else if (response?.data?.error) {
                setResult({type: "error", data: response?.data?.error, compileError: true});
                createUserDocument(currentUser, {code, slotID: params.slotID, passed: false, lang});
            }
            textarea.style.color = "#fff";
            textarea.style.setProperty("--textarea-bg", "#fff");
            textarea.style.setProperty("--textarea-color", "#fff");
            setDisableText(true);
            localStorage.setItem("disable", 1);
            localStorage.setItem("codeStatus", 1);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        if (disableText) {
            navigate("/thankyou");
        }
    }, []);

    useEffect(() => {
        if (result?.type) {
            const timeout = setTimeout(() => {
                navigate("/thankyou");
            }, 20000);
            // if (result?.type === "success" && prob[0]?.outputCheck == result?.data) {
            //     console.log("Passed");
            // }
            // else {
            //     console.log("Failed");
            // }
            return () => clearTimeout(timeout);
        }
    }, [result]);

    // useEffect(() => {
    //     console.log(code);
    // }, [code]);

    return (
        <>
        <div className="codeContainer" ref={fullScreenRef}>
            <h1 className="title" style={{margin: "1rem auto 0rem"}}>Andhadhund👀</h1>
            <div className="timer">
                <div className="time">
                    <span className="timeSec" id="timeSec">{displayMinutes}:{displaySeconds}</span><span>minutes</span>
                </div>
            </div>
            <form id="myform" className="codeForm" name="myform" onSubmit={submitCode}> {/*  */}
                <textarea disabled={disableText} name="code" id="code" cols="100" rows="13" onChange={({target}) => setCode(target.value)} />
                {!result?.type &&
                    <>
                        <div className="dropdown">
                            <label className="selectLabel" htmlFor="lang">Select Language:</label>
                            <select className="minimal" name="lang" id="lang" onChange={({target}) => setLang(target.value)}>
                                <option value="C++">C++</option> 
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                                {/* <option value="C">C</option> */}
                                {/* <option value="C#">C#</option> */}
                                {/* <option value="Visual Basic">Visual Basic</option> */}
                            </select>
                        </div>
                        <input ref={buttonRef} disabled={disableText} type="submit" value="Submit" name="submit" />
                    </>
                }
            </form>
            {result?.type &&
                <div className={result?.type === "success" ? "resultSuccess" : "resultError"}>
                    {result?.type === "success" ? "Test cases passed!" : "Test cases failed!"}
                </div>
            }
            {result?.type &&
                <div className="outputBox">
                    {result?.type === "success" ? (
                        <div>
                            Expected Output: {prob[0]?.outputCheck}
                            Your Output: {result?.data}
                        </div>
                        ) : (
                            result?.compileError ? (
                                <div>
                                    Error: {result?.data}
                                </div>
                            ) : (
                                <div>
                                    Expected Output: {prob[0]?.outputCheck}
                                    Your Output: {result?.data}
                                </div>
                            )
                    ) }
                    
                </div>
            }
            {message !== "" &&
                <div>
                    {message}
                </div>
            }
        </div>
        </>
    );
}

export default Ide;
