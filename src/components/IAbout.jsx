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


    const aboutUs = {
        "kjsit": "K J Somaiya Institute of Technology, Sion ,Mumbai was established in the year 2001. It is an autonomous engineering institute recognized by UGC, approved by AICTE & DTE, and is permanently affiliated to the University of Mumbai.KJSIT offers UG programs in Computer Engineering, Information Technology, Artificial Intelligence & Data Science, Electronics & Telecommunication Engineering, PG program in Artificial Intelligence and Ph.D.programs in Computer Engineering,Electronics & Telecommunication Engineering and Information Technology.Our aim is to impart the need-based and value - based quality technical education to students, making them the best technocrats.We conduct various technical, cultural and sports activities all through the year by providing the exposure making students all-rounders.",
        "iet": "The Institution of Engineering and Technology is one of the worlds professional societies of engineering and technology community with more than 150,000 members in 127 countries and offices in the Europe, North America and Asia- Pacific regions.The IET provides a global knowledge network to facilitate the exchange of ideas and promote the positive role of science, engineering and technology in the world.K J Somaiya Institue of Technology is one of the best academic affiliate partner and thank you support institute with the IET.",
        "postman": "The Postman KJSIT Community is a valuable resource for anyone who wants to learn more about Postman and how to use it to build and test APIs. Postman is a collaborative API development environment that helps teams build, test, document, and monitor APIs."
    }

    function changeMenuSlide() {
        const menuCL = retId("menuSlide").classList;
        // console.log(menuCL);
        if (menuCL.contains("openSlider")) {
            retId("menuSlide").classList.remove("openSlider");
            retId("idMenuBIA").classList.remove("openM");
            document.body.style.overflow = "auto";
        }
        else {
            retId("menuSlide").classList.add("openSlider");
            document.body.style.overflow = "hidden";
            retId("idMenuBIA").classList.add("openM");
        }
    }

    function closeMenu() {
        retId("menuSlide").classList.remove("openSlider");
        retId("idMenuBIA").classList.remove("openM");
        document.body.style.overflow = "auto";
    }

    function retId(idname) {
        return document.getElementById(idname)
    }

    return (
        <>
            <div className="posR">
                <BgOptional />
                <div className="navbar divf jusSpaceB navInfo">

                    <div className="divf" >
                        <button
                            id="idMenuBIA"
                            className="menuNB"
                            onClick={() => { changeMenuSlide() }}
                            style={{ "display": "none" }}
                        ><FontAwesomeIcon icon={faCircleChevronDown} /></button>
                        <Link className="logoKhaas" to="/">
                            <img src={hmLogo} className="hmKhaas" />
                        </Link>
                    </div>

                    <div className="divf" style={{ "gap": "1rem" }}>
                        <div id="navAllLinksIA" className="divf allLinks fullWH">
                            <button id="navAbout" onClick={() => navigate("/")}>Home</button>
                            <button id="navAbout" onClick={() => navigate("/info")}>Hackmela Info</button>
                        </div>
                    </div>
                    <button className="registerH navIReg">Register Me!</button>
                </div>
                <div id="menuSlide" className="divf fdirc menSlider allLinks">
                    <button id="navAbout" onClick={() => { closeMenu(); navigate("/") }}>Home</button>
                    <button id="navAbout" onClick={() => { closeMenu(); navigate("/info") }}>Hackmela Info</button>
                </div>
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
                                        <p className="abhmdesc">{aboutUs.kjsit}</p>
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
                                        <p className="abhmdesc">{aboutUs.iet}</p>
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
                                        <p className="abhmdesc">{aboutUs.postman}</p>
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