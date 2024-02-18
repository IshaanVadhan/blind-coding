import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './Problem.css';
import { probStates } from "./helpers/probStates";

function Problem() {
    const navigate = useNavigate();
    const params = useParams();
    const [timer, setTimer] = useState();

    // var interval = 10000; //300000;

    // function reset()
    // {
    //     localStorage.endTime = +new Date + interval;
    // }

    // if(!localStorage.endTime)
    // {
    //     reset();
    // }

    // setInterval(function()
    // {
    //     var diff, minutes, seconds;
    //     var remaining = localStorage.endTime - new Date;
    //     if( remaining >= 0 ) {
    //         // diff = Math.floor( remaining / 1000 );
    //         diff = Math.floor( remaining / 1000 );
    //         minutes = (diff / 60) | 0;
    //         seconds = (diff % 60) | 0;

    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;

    //         setTimer(minutes + ":" + seconds);
    //         // setTimer( Math.floor( remaining / 1000 ));
    //     }
    //     else {
    //         // navigate(`/${params.slotID}/code`);
    //     }
    // }, 100);
    var minutes = 5;
    // const [seconds, setSeconds] = useState(parseInt(localStorage.getItem('seconds')) || minutes * 60);
    const [seconds, setSeconds] = useState((parseInt(localStorage.getItem('probTimer')) !== 1) ? (parseInt(localStorage.getItem('seconds')) || minutes * 60) : "");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    clearInterval(intervalId);
                    localStorage.setItem('probTimer', 1);
                    navigate(`/${params.slotID}/code`);
                    return prevSeconds;
                }
                const newSeconds = prevSeconds - 1;
                localStorage.setItem('seconds', newSeconds);
                return newSeconds;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [minutes]);

    const displaySeconds = (seconds % 60) < 10 ? `0${seconds % 60}` : (seconds % 60) ;
    const displayMinutes = Math.floor(seconds / 60) < 10 ? `0${Math.floor(seconds / 60)}` : (Math.floor(seconds / 60)) ;

    useEffect(() => {
        setTimer(displayMinutes + ":" + displaySeconds);
    }, [displaySeconds]);

    return (
        <>
            {probStates.map((item, index) => {
                if ((index + 1) == params?.slotID) {
                    return (
                        <div className="probContainer" key={index} onCopy={(event)=>{
                            event.preventDefault();
                        }}>
                            <div className="timer">
                                <h3>Time remaining to view the problem statement:</h3>
                                <div className="time">
                                    <span className="timeSec" id="timeSec">{displayMinutes}:{displaySeconds}</span><span>minutes</span>
                                </div>
                            </div>
                            <div className="probPara">
                                <h1 className="heading">Problem Statement:</h1>
                                <p className="probText">
                                    {item?.problemStatement}
                                </p>
                            </div>
                            <div className="probPara">
                                <h1 className="heading">Custom Input:</h1>
                                <p className="probText">
                                    {item?.customJudge}
                                </p>
                            </div>   
                            <div className="probPara">
                                <h1 className="heading">Constraints:</h1>
                                <p className="probText">
                                    {item?.constraints}
                                </p>
                            </div>       
                            <div className="probPara">
                                <h1 className="heading">Sample Input:</h1>
                                <p className="probText">
                                    {item?.sampleInput}
                                </p>
                            </div>       
                            <div className="probPara">
                                <h1 className="heading">Sample Output:</h1>
                                <p className="probText">
                                    {item?.sampleOutput}
                                </p>
                            </div>
                            <div className="probPara">
                                <h1 className="heading">Explanation:</h1>
                                <p className="probText">
                                    {item?.explanation}
                                </p>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <button className="instBtn" onClick={() => {
                                    localStorage.setItem('probTimer', 1);
                                    navigate(`/${params.slotID}/code`);
                                }}>Proceed</button>
                            </div>    
                        </div>
                    );
                }
            })}
        </>
    );
}

export default Problem;
