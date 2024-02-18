import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Slots.css"

function Ide() {
    const navigate = useNavigate();

    return (
        <>
        <div className="slotsContainer">
            <h1 className="title">Select your slot</h1>
            <div className="slots">
                <button  className="slot" id="1" onClick={() => navigate("/1/login")}>Slot 1</button>
                <button disabled className="slot" id="2" onClick={() => navigate("/2/login")}>Slot 2</button>
                <button disabled className="slot" id="5" onClick={() => navigate("/5/login")}>Final Slot</button>
            </div>
        </div>
        </>
    );
}

export default Ide;
