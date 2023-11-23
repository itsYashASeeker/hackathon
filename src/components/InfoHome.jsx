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

import themeWeb3 from "../assets/themes/web3.png";
import themeaiml from "../assets/themes/aiml.png";
import themearvr from "../assets/themes/arvr.png";
import themeWApp from "../assets/themes/wapp.png";

import firstI from "../assets/first.png";
import secondI from "../assets/second.png";
import thirdI from "../assets/third.png";
import FAQs from "./faq";

export default function InfoHome() {

    const navigate = useNavigate();
    // const fullPathA = window.location.pathname.split("/");
    const params = useParams();
    console.log(params);

    useEffect(() => {
        function updateSect() {
            const scrolledTop = Math.abs(window.scrollY);
            const themes = retId("themes").offsetTop;
            const timeline = retId("timeline").offsetTop;
            const sponsors = retId("sponsors").offsetTop;
            // const partners = retId("partners").offsetTop;
            const prizes = retId("prizes").offsetTop;
            retId("navAbout").classList.remove("aRN");
            retId("navTheme").classList.remove("aRN");
            retId("navTim").classList.remove("aRN");
            retId("navSpon").classList.remove("aRN");
            // retId("navPart").classList.remove("aRN");
            retId("navPriz").classList.remove("aRN");
            if (scrolledTop < (themes - 50)) {
                // navigate("/info/#about");
                retId("navAbout").classList.add("aRN");
            }
            else if (scrolledTop < (timeline - 50)) {
                // navigate("/info/#about");
                retId("navTheme").classList.add("aRN");
            }
            else if (scrolledTop < (sponsors - 50)) {
                // navigate("/info/#sponsors");
                retId("navTim").classList.add("aRN");
            }
            // else if (scrolledTop < (partners - 50)) {
            //     // navigate("/info/#sponsors");
            //     retId("navSpon").classList.add("aRN");
            // }
            else if (scrolledTop < (prizes - 50)) {
                // navigate("/info/#sponsors");
                retId("navSpon").classList.add("aRN");
            }
            else {
                // navigate("/info/#prizes");
                retId("navPriz").classList.add("aRN");
            }
        }
        window.addEventListener("scroll", updateSect)
        return () => {
            window.removeEventListener('scroll', updateSect);
        };
    }, [])



    function retId(idname) {
        return document.getElementById(idname)
    }

    function goToSect(idname) {
        var scOpt = retId(idname).offsetTop - 50
        window.scrollTo({ top: scOpt })
    }

    function changeMenuSlide() {
        const menuCL = retId("menuSlide").classList;
        console.log(menuCL);
        if (menuCL.contains("openSlider")) {
            retId("menuSlide").classList.remove("openSlider");
            retId("idMenuB").classList.remove("openM");
            document.body.style.overflow = "auto";
        }
        else {
            retId("menuSlide").classList.add("openSlider");
            document.body.style.overflow = "hidden";
            retId("idMenuB").classList.add("openM");
        }
    }

    function closeMenu() {
        retId("menuSlide").classList.remove("openSlider");
        retId("idMenuB").classList.remove("openM");
        document.body.style.overflow = "auto";
    }

    return (
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
                        {/* <button id="navHome" onClick={() => { navigate("/") }}>Home</button> */}
                        <button id="navAbout" onClick={() => goToSect("about")}>About Hackmela</button>
                        <button id="navTheme" onClick={() => goToSect("themes")}>Themes</button>
                        <button id="navTim" onClick={() => goToSect("timeline")}>Timeline</button>
                        <button id="navSpon" onClick={() => goToSect("sponsors")}>Sponsors</button>
                        {/* <button id="navPart" onClick={() => goToSect("partners")}>Partners</button> */}
                        <button id="navPriz" onClick={() => goToSect("prizes")}>Prizes</button>
                        {/* <button id="navMAb" onClick={() => navigate("/info/about")}>About</button> */}
                        <button id="navFaq">FAQ's</button>
                        <button id="navMAb" onClick={() => navigate("/info/about")}>About Us</button>
                    </div>
                </div>
                <button className="registerH navIReg">Register Me!</button>
            </div>
            <div id="menuSlide" className="divf fdirc menSlider allLinks">
                {/* <button id="navHome" onClick={() => { closeMenu(); navigate("/") }}>Home</button> */}
                <button id="navAbout" onClick={() => goToSect("about")}>About Hackmela</button>
                <button id="navTheme" onClick={() => goToSect("themes")}>Themes</button>
                <button id="navTim" onClick={() => { closeMenu(); goToSect("timeline"); }}>Timeline</button>
                <button id="navSpon" onClick={() => { closeMenu(); goToSect("sponsors"); }}>Sponsors</button>
                {/* <button id="navPart" onClick={() => { closeMenu(); goToSect("partners"); }}>Partners</button> */}
                <button id="navPriz" onClick={() => { closeMenu(); goToSect("prizes"); }}>Prizes</button>
                <button id="navFaq">FAQ's</button>
                <button id="navMAb" onClick={() => navigate("/info/about")}>About Us</button>
            </div>
            <div className="divf fdirc allSects fullWH">
                <section id="about" className="divf about fullWH sectC">
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="posR fullWH">
                        {/* <div className="designSectC1"></div> */}
                        <div className="divf fdirc alignL fullWH sectCard1">

                            <p className="mainH alignL ">{"<Hackmela />"}</p>

                            <div className="divf firc alignL fullWH" style={{ "gap": "3rem" }}>
                                <div className="divf fdirc fullWH aboutHM">
                                    {/* <div className="divf fullWH aboutCoM"> */}
                                    {/* <div className="divf" style={{"width": "50%"}}> */}
                                    <Link to="/">
                                        <img src={HackmelaI} className="hackTitle" />
                                    </Link>

                                    {/* </div> */}

                                    <p className="abhmdesc">The hackathon will be a <b>24-hour offline intensive competition</b> where teams of developers, designers, and innovators will come together to create solutions in the <b>domains of Blockchain, Artificial Intelligence, Machine Learning, AR/VR</b>. Shortlisting of teams will be done after the registration process and <b>15-20 teams</b> will shortlisted based on their profiles and problem statements. Innovative, creative and societal based problem statements will be focused in our Hackathon. Our hackathon will be an <b>Aurora for enthusiastic developers to build creative projects and get opportunities.</b></p>
                                    {/* </div> */}
                                    <div className="divf allCAbH">
                                        <div className="divf fdirc indCard">
                                            <div className="divf indCHead">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                <p>Dates</p>
                                            </div>
                                            <div className="indCMain">
                                                <p>2 & 3 Mar, 2024</p>
                                            </div>
                                        </div>
                                        <div className="divf fdirc indCard">
                                            <div className="divf indCHead">
                                                <FontAwesomeIcon icon={faPeopleGroup} />
                                                <p>Team</p>
                                            </div>
                                            <div className="indCMain">
                                                <p>2-4 Members</p>
                                            </div>
                                        </div>
                                        <div className="divf fdirc indCard">
                                            <div className="divf indCHead">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                <p>Venue</p>
                                            </div>
                                            <div className="indCMain khaaskjsit">
                                                <p>KJ Somaiya Institute of Technology, Mumbai</p>
                                            </div>
                                        </div>
                                        {/* <div className="divf fdirc indCard">
                                            <div className="divf indCHead">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                <p>Happening</p>
                                            </div>
                                            <div className="indCMain">
                                                <p>Offline</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section id="themes" className="divf about fullWH sectC">
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="posR fullWH">
                        {/* <div className="designSectC1"></div> */}
                        <div className="divf fdirc alignL fullWH sectCard1">

                            <p className="mainH alignL ">{"<Themes />"}</p>
                            <div className="divf allThemes fullWH">
                                <img src={themeWeb3} />
                                <img src={themeaiml} />
                                <img src={themeWApp} />
                                <img src={themearvr} />
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section id="timeline" className="divf about fullWH sectC sponsorS">
                    <motion.div className="posR fullWH"
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        <div className="divf fdirc alignL fullWH sectCard1 sponDiv">
                            <p className="mainH  ">{"<Timeline />"}</p>
                            <HTimeline />
                        </div>
                    </motion.div>
                </section>
                <section id="sponsors" className="divf about fullWH sectC sponsorS">
                    <motion.div className="posR fullWH"
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        {/* <div className="designSectC1"></div> */}
                        <div className="divf fdirc alignL fullWH sectCard1 sponDiv">
                            <p className="mainH  ">{"<Sponsors />"}</p>
                            <div className="divf fdirc allTypeS">
                                <div className="divf typeSpon gold">
                                    <p className="divf fdirc mainTS">
                                        <p>G</p>
                                        <p>O</p>
                                        <p>L</p>
                                        <p>D</p>
                                    </p>
                                    <div className="divf allSpons">
                                        <Link><img src={PolygonL} className="sponC"></img></Link>
                                        <Link><img src={GraphL} className="sponC"></img></Link>
                                        <Link><img src={GoogleL} className="sponC"></img></Link>
                                        <Link><img src={EthereumL} className="sponC"></img></Link>
                                    </div>
                                </div>
                                <div className="divf typeSpon silver">
                                    <p className="divf fdirc mainTS">
                                        <p>S</p>
                                        <p>I</p>
                                        <p>L</p>
                                        <p>V</p>
                                        <p>E</p>
                                        <p>R</p>
                                    </p>
                                    <div className="divf allSpons">
                                        <Link><img src={PolygonL} className="sponC"></img></Link>
                                        {/* <Link><img src={GraphL} className="sponC"></img></Link>
                                        <Link><img src={GoogleL} className="sponC"></img></Link>
                                        <Link><img src={EthereumL} className="sponC"></img></Link> */}
                                    </div>
                                </div>
                                <div className="divf typeSpon bronze">
                                    <p className="divf fdirc mainTS">
                                        <p>B</p>
                                        <p>R</p>
                                        <p>O</p>
                                        <p>N</p>
                                        <p>Z</p>
                                        <p>E</p>
                                    </p>
                                    <div className="divf allSpons">
                                        <Link><img src={PolygonL} className="sponC"></img></Link>
                                        <Link><img src={GraphL} className="sponC"></img></Link>
                                        <Link><img src={GoogleL} className="sponC"></img></Link>
                                        <Link><img src={EthereumL} className="sponC"></img></Link>
                                    </div>
                                </div>
                            </div>

                            {/* </div>
                    </motion.div>
                </section>
                <section id="partners" className="divf about fullWH sectC sponsorS">
                    <motion.div className="posR fullWH"
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        <div className="divf fdirc alignL fullWH sectCard1 sponDiv"> */}
                            <p className="mainH  ">{"<Community Partners />"}</p>
                            <div className="divf allSpons">
                                <Link><img src={PolygonL} className="sponC"></img></Link>
                                <Link><img src={GraphL} className="sponC"></img></Link>
                                <Link><img src={GoogleL} className="sponC"></img></Link>
                                <Link><img src={EthereumL} className="sponC"></img></Link>
                                <Link><img src={ArbitrumL} className="sponC"></img></Link>
                                <Link><img src={MetaL} className="sponC"></img></Link>
                                <Link><img src={ReplitL} className="sponC"></img></Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section id="prizes" className="divf about fullWH sectC sponsorS">
                    <motion.div className="posR fullWH"
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        {/* <div className="designSectC1"></div> */}
                        <div className="divf fdirc alignL fullWH sectCard1 sponDiv">
                            <p className="mainH  ">{"<Prizes />"}</p>
                            <div className="divf allPr">
                                <div className="Prize silver prSil">
                                    <div className="divf fdirc">
                                        <p className="pH1 silver">2nd Prize</p>
                                        <p className="pH2"><FontAwesomeIcon icon={faIndianRupeeSign} className="rupeeS" />50,000</p>
                                    </div>
                                    <div className="divf tCont">
                                        <img src={secondI}
                                            className="trophy"
                                        />
                                    </div>
                                </div>
                                <div className="Prize gold prGol">
                                    <div className="divf fdirc">
                                        <p className="pH1 gold">1st Prize</p>
                                        <p className="pH2"><FontAwesomeIcon icon={faIndianRupeeSign} className="rupeeS" />50,000</p>
                                    </div>
                                    <div className="divf tCont">
                                        <img src={firstI}
                                            className="trophy"
                                        />
                                    </div>
                                </div>
                                <div className="Prize bronze prBro">
                                    <div className="divf fdirc">
                                        <p className="pH1 bronze">3rd Prize</p>
                                        <p className="pH2"><FontAwesomeIcon icon={faIndianRupeeSign} className="rupeeS" />50,000</p>
                                    </div>
                                    <div className="divf tCont">
                                        <img src={thirdI}
                                            className="trophy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section id="prizes" className="divf about fullWH sectC sponsorS">
                    <motion.div className="posR fullWH"
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        {/* <div className="designSectC1"></div> */}
                        <div className="divf fdirc alignL fullWH sectCard1 sponDiv">
                            <FAQs />
                        </div>
                    </motion.div>
                </section>
            </div>

        </div>
    )
}