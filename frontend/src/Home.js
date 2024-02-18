import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineMailOutline, MdCall } from "react-icons/md";
import './Home.css';
import logo from "./temp-f/logo.png";
import Omkar from "./context/OmkarBhopale.jpeg";
import Mandar from "./context/MandarPaygude.jpg";
import Ishaan from "./context/IshaanVadhan.jpeg";
import Maitrey from "./context/MaitreyBothare.jpg";
import Nikhil from "./context/NikhilMagar.jpg";
import Ravindra from "./context/RavindraKadam.jpeg";
import Josh from "./context/Josh.png";
import Linkcode from "./context/Linkcode.jpg";
import Techr from "./context/techR.jpg";
import Cascode from "./context/cascode.png";
import Creamy from "./context/creamy.png";

function Home() {
    const navigate = useNavigate();
    const [tab, setTab] = useState("Home");

    return (
        <>
        <div className="main">
            <div className="navbar">
                <div className="icon">
                    <img className="logo" height="80px" src={logo} alt="BlindCode" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a onClick={() => setTab("Home")}>HOME</a></li>
                        <li><a onClick={() => setTab("Sponsors")}>SPONSORS</a></li>
                        <li><a onClick={() => setTab("About")}>ABOUT US</a></li>
                        <li><a onClick={() => setTab("Contact")}>CONTACT US</a></li>
                    </ul>
                </div>
            </div>
            {tab === "Home" &&
                <div className="content">
                    <h1 className="homeTitle">Andhadhundh</h1>
                    <p className="homePar">Hola! We are pleased to have you here! Codefiesta is one of the most exciting and <br />adventurous event organized by Computer Department. This year, we are maintaining<br />this legacy to entertain the participants in the most efficient and unique way.
                        Let's <br />begin this 2k23 with a kick start! Let your code speak...
                    </p>
                    {/* <h1 className="homeTitle">Andhadhundh</h1> */}
                    <p className="homePar">Andhadhundh is a coding challenge that will assess your programming proficiency<br /> using a unique approach.  In this challenge, participants will be required to write code<br /> without being able to see what they are typing.
                    This means they will need to rely solely<br /> on their memory and knowledge of programming syntax to complete the challenge.</p>
                    <button className="homeBtn" onClick={() => navigate("/instructions")}>Get Started</button>
                </div>
            }
            {tab === "About" &&
                <div className="content">
                    <div className="aboutus">
                        {/* <h2 id="Team" className="homeSubtitle">Team: </h2> */}
                        <h1 className="homeTitle">Team</h1>
                        <div className="abtContainer">
                            <div className="row">
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Omkar} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Omkar Bhopale</h2>
                                            <p className="cardTitle">Event Mentor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Mandar} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Mandar Paygude</h2>
                                            <p className="cardTitle">Event Lead</p>
                                        </div>
                                    </div>
                                </div><div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Ishaan} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Ishaan Vadhan</h2>
                                            <p className="cardTitle">Student Co-ordinator</p>
                                        </div>
                                    </div>
                                </div>
                            {/* </div>
                            <div className="row"> */}
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Nikhil} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Nikhil Magar</h2>
                                            <p className="cardTitle">Student Co-ordinator</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Maitrey} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Maitrey Bothare</h2>
                                            <p className="cardTitle">Student Co-ordinator</p>
                                        </div>
                                    </div>
                                </div><div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Ravindra} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Ravindra Kadam</h2>
                                            <p className="cardTitle">Student Co-ordinator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {tab === "Contact" &&
                <div className="content">
                    <h1 className="homeTitle">Contact Us</h1>
                    <div className="contactCont">
                        <div className="contCard" style={{borderRight: "2px solid #ccc", paddingRight: "2.5rem"}}>
                            <h3 className="contTitle">Omkar Bhopale</h3>
                            <div className="contText"><div className="contIcon"><MdCall /></div>9890687427</div>
                            <div className="contText"><div className="contIcon"><MdOutlineMailOutline /></div>omkarbhopale@gmail.com</div>
                        </div>
                        <div className="contCard" style={{paddingLeft: "1.5rem"}}>
                            <h3 className="contTitle">Mandar Paygude</h3>
                            <div className="contText"><div className="contIcon"><MdCall /></div>8668721427</div>
                            <div className="contText"><div className="contIcon"><MdOutlineMailOutline /></div>paygudemandar@gmail.com</div>
                        </div>
                    </div>
                </div>
            }
            {tab === "Sponsors" &&
                <div className="content">
                    <div className="aboutus">
                        {/* <h2 id="Team" className="homeSubtitle">Team: </h2> */}
                        <h1 className="homeTitle">Our Sponsors</h1>
                        <div className="abtContainer">
                            <div className="row">
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Josh} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Josh Software Pvt Ltd</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Techr} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">TechR Business Solutions</h2>
                                        </div>
                                    </div>
                                </div><div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Cascode} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Cascode</h2>
                                        </div>
                                    </div>
                                </div>
                            {/* </div>
                            <div className="row"> */}
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Linkcode} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Linkcode Technologies</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card">
                                        <div className="cardContainer">
                                            <img className="cardImage" src={Creamy} alt="" style={{width: "100%"}} />
                                            <h2 className="cardName">Creamy Cakeology</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        </>
    );
}

export default Home;
