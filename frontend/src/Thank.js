import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RxCheckCircled } from "react-icons/rx";
import './Thank.css';

function Thank() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("seconds");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("probTimer");
        localStorage.removeItem("ideSec");
        localStorage.removeItem("codeStatus");
        localStorage.removeItem("codeTimer");
        localStorage.removeItem("disable");
    }, []);

    return (
        <>
            <div className="thankContainer">
                <div className="checkCont">
                    <RxCheckCircled style={{fontSize: "5rem", color: "#2db656"}} />
                </div>
                <div className="thankMsg">
                    <div>
                        Thank you for attending the event!
                    </div>
                    <div>
                        Results will be announced shortly!
                    </div>
                </div>
            </div>
        </>
    );
}

export default Thank;
