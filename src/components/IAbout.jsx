import NavInfo from "./NavInfo";
import Navbar from "./Navbar";
import hackerMindset from "../assets/programming1.svg";
import "../css/info.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import PolygonL from "../assets/sponsors/Polygon_blockchain_logo.png";
import GraphL from "../assets/sponsors/The-Graph.webp";
import GoogleL from "../assets/sponsors/Google-logo.png";
import MetaL from "../assets/sponsors/Meta logo.png";
import ArbitrumL from "../assets/sponsors/full-arbitrum-logo.png";
import EthereumL from "../assets/sponsors/ethereum logo.png";
import ReplitL from "../assets/sponsors/Replit logo.png";
import HackmelaI from "../assets/hackmela_title.png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BgOptional } from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faCircleChevronDown, faIndianRupeeSign, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import HTimeline from "./HTimeline";
import hmLogo from "../assets/hm.png";
import "../css/media.css";
import kjsitLogo from "../assets/kjsit.jpg";
import IETLogo from "../assets/IET_LOGO.png";
import postmanLogo from "../assets/postman_logo.png";

import firstI from "../assets/first.png";
import secondI from "../assets/second.png";
import thirdI from "../assets/third.png";
import FAQs from "./faq";

export default function IAbout() {
    const navigate = useNavigate();
    return (
        <>
            <div className="posR">
                <BgOptional />
                <div className="navbar divf jusSpaceB navInfo">

                    <div className="divf" >
                        <button
                            id="idMenuB"
                            className="menuNB"
                            onClick={() => { changeMenuSlide() }}
                            style={{ "display": "none" }}
                        ><FontAwesomeIcon icon={faCircleChevronDown} /></button>
                        <Link className="logoKhaas" to="/">
                            <img src={hmLogo} className="hmKhaas" />
                        </Link>
                    </div>

                    <div className="divf" style={{ "gap": "1rem" }}>

                        <div id="navAllLinks" className="divf allLinks fullWH">
                            <button id="navAbout" onClick={() => navigate("/")}>Home</button>
                            <button id="navAbout" onClick={() => navigate("/info")}>Hackmela Info</button>
                            {/* <button id="navTim" onClick={() => goToSect("timeline")}>Timeline</button>
                            <button id="navSpon" onClick={() => goToSect("sponsors")}>Sponsors</button>
                            <button id="navPart" onClick={() => goToSect("partners")}>Partners</button>
                            <button id="navPriz" onClick={() => goToSect("prizes")}>Prizes</button>
                            <button id="navFaq">FAQ's</button>
                            <button id="navMAb" onClick={() => navigate("/info/about")}>About</button> */}
                        </div>
                    </div>
                    <button className="registerH navIReg">Register Me!</button>
                </div>
                {/* <div id="menuSlide" className="divf fdirc menSlider allLinks">
                    <button id="navAbout" onClick={() => { closeMenu(); goToSect("about"); }}>Hackmela</button>
                    <button id="navTim" onClick={() => { closeMenu(); goToSect("timeline"); }}>Timeline</button>
                    <button id="navSpon" onClick={() => { closeMenu(); goToSect("sponsors"); }}>Sponsors</button>
                    <button id="navPart" onClick={() => { closeMenu(); goToSect("partners"); }}>Partners</button>
                    <button id="navPriz" onClick={() => { closeMenu(); goToSect("prizes"); }}>Prizes</button>
                    <button id="navFaq">FAQ's</button>
                    <button id="navMAb" onClick={() => navigate("/info/about")}>About</button>
                </div> */}
                <div className="divf fdirc allSects fullWH">
                    <section id="kjsit" className="divf about fullWH sectC">
                        <motion.div
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: "spring" }}
                            className="posR fullWH">
                            <div className="divf fdirc alignL fullWH sectCard1">
                                <p className="mainH alignL ">{"<KJSIT />"}</p>
                                <div className="divf firc alignL fullWH" style={{ "gap": "3rem" }}>
                                    <div className="divf fdirc fullWH aboutHM">
                                        <Link to="/">
                                            <img src={kjsitLogo} className="kLogo" />
                                        </Link>
                                        <p className="abhmdesc">The hackathon will be a <b>24-hour offline intensive competition</b> where teams of developers, designers, and innovators will come together to create solutions in the <b>domains of Blockchain, Artificial Intelligence, Machine Learning, AR/VR</b>. Shortlisting of teams will be done after the registration process and <b>15-20 teams</b> will shortlisted based on their profiles and problem statements. Innovative, creative and societal based problem statements will be focused in our Hackathon. Our hackathon will be an <b>Aurora for enthusiastic developers to build creative projects and get opportunities.</b></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                    <section id="iet" className="divf about fullWH sectC">
                        <motion.div
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: "spring" }}
                            className="posR fullWH">
                            <div className="divf fdirc alignL fullWH sectCard1">
                                <p className="mainH alignL ">{"<IET />"}</p>
                                <div className="divf firc alignL fullWH" style={{ "gap": "3rem" }}>
                                    <div className="divf fdirc fullWH aboutHM">
                                        <Link to="/">
                                            <img src={IETLogo} className="kLogo" />
                                        </Link>
                                        <p className="abhmdesc">The hackathon will be a <b>24-hour offline intensive competition</b> where teams of developers, designers, and innovators will come together to create solutions in the <b>domains of Blockchain, Artificial Intelligence, Machine Learning, AR/VR</b>. Shortlisting of teams will be done after the registration process and <b>15-20 teams</b> will shortlisted based on their profiles and problem statements. Innovative, creative and societal based problem statements will be focused in our Hackathon. Our hackathon will be an <b>Aurora for enthusiastic developers to build creative projects and get opportunities.</b></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                    <section id="postman" className="divf about fullWH sectC">
                        <motion.div
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: "spring" }}
                            className="posR fullWH">
                            <div className="divf fdirc alignL fullWH sectCard1">
                                <p className="mainH alignL ">{"<Postman />"}</p>
                                <div className="divf firc alignL fullWH" style={{ "gap": "3rem" }}>
                                    <div className="divf fdirc fullWH aboutHM">
                                        <Link to="/">
                                            <img src={postmanLogo} className="kLogo" />
                                        </Link>
                                        <p className="abhmdesc">The hackathon will be a <b>24-hour offline intensive competition</b> where teams of developers, designers, and innovators will come together to create solutions in the <b>domains of Blockchain, Artificial Intelligence, Machine Learning, AR/VR</b>. Shortlisting of teams will be done after the registration process and <b>15-20 teams</b> will shortlisted based on their profiles and problem statements. Innovative, creative and societal based problem statements will be focused in our Hackathon. Our hackathon will be an <b>Aurora for enthusiastic developers to build creative projects and get opportunities.</b></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </div>

            </div>
        </>
    )
}