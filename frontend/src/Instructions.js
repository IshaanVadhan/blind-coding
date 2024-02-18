import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './Instructions.css';

function Instructions() {
    const navigate = useNavigate();

    return (
        <>
            <div className="instContainer">
                <h1 className="instTitle">Instructions</h1>
                <div className="para">
                    <p className="ins">
                        <span className="numb">1.</span> <span className="insText">Hi, I am Akash (aka Ayushman Khurana), I will be assisting you in today's contest. Make sure you read and follow each and every instruction thoroughly.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">2.</span> <span className="insText">Welcome HaptiCoder! we are pleased to have you and assure you completely new and adventurous experience in this contest.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">3.</span> <span className="insText">After you read all instructions properly, click on start test and then you will be redirected to a Login Page.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">4.</span> <span className="insText">Make sure you login with the same email ID that you have registered with our event at the time of Registration on G- Form.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">5.</span> <span className="insText">You will be assigned a unique password for the contest. Make sure you login with correct credentials as falsy credentials will lead to termination of your candidature. You may take help of volunteers available for the Login.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">6.</span> <span className="insText">After logging in, you will be redirected to the page providing you the provision to select your appropriate slot. Volunteers will disclose the slot details at the time of briefing. Kindly choose the appropriate slot to get eleigible for the qualification.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">7.</span> <span className="insText">After selecting the appropriate slot, you will be seen a problem statement. The page will persist for 5 minutes and automatically the system will redirect you to the editor where you have to write the code.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">8.</span> <span className="insText">You will have maximum of 15 minutes to write the script/ program for respective problem statement. The code will get automatically submitted if user passed the 15 minutes timer.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">9.</span> <span className="insText">As soon as the code is submitted by the contestant, the evaluation of the code will be done and contestant will be able to view the code but cannot edit it.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">10.</span> <span className="insText">Any malicious practices if observed by our volunteers will lead to the termination of the candidature at the very next moment without discussion.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">11.</span> <span className="insText">The contest will be conducted in different slots with one problem statement each. Each problem statement can be viewd for maximum of 5 minutes and the time for solving the same will be maximum of 15 minutes.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">12.</span> <span className="insText">Based on the logic building, programming skills, knowledge of understanding problem, approach, time management and robustness of the code, top performers will be qualified for the final round.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">13.</span> <span className="insText">After completion of all general round slots, final round timings will be disclosed by the volunteers. Make sure you are in touch with the volunteers, leads and mentors.</span>
                    </p>
                </div>
                <div className="para">
                    <p className="ins">
                        <span className="numb">14.</span> <span className="insText">The final round will also have a problem statement viewable for 5 minutes and time to tackle the problem and code will be 15 minutes. The results and the winners will be declared soon.</span>
                    </p>
                </div>
                <div style={{textAlign: "center"}}>
                    <button className="instBtn" onClick={() => navigate("/slots")}>Proceed</button>
                </div>
            </div>
        </>
    );
}

export default Instructions;
