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
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function InfoHome() {

    const navigate = useNavigate();
    // const fullPathA = window.location.pathname.split("/");
    const params = useParams();
    console.log(params);
    useEffect(() => {
        function updateSect() {
            const scrolledTop = Math.abs(window.scrollY);
            const sponsors = retId("sponsors").offsetTop;
            const prizes = retId("prizes").offsetTop;
            retId("navAbout").classList.remove("aRN");
            retId("navSpon").classList.remove("aRN");
            retId("navPriz").classList.remove("aRN");
            if (scrolledTop < (sponsors - 20)) {
                navigate("/info/#about");
                retId("navAbout").classList.add("aRN");
            }
            else if (scrolledTop < (prizes - 20)) {
                navigate("/info/#sponsors");
                retId("navSpon").classList.add("aRN");
            }
            else {
                navigate("/info/#prizes");
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

    return (
        <>
            <div className="mainContainer mainToBack">
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div className="navbar divf jusSpaceB navInfo">
                <div className="divf allLinks">
                    <Link id="navHome" to="/">Home</Link>
                    <Link id="navAbout" to="/info/#about" onClick={() => { window.scrollTo(retId("about").offsetTop) }}>About</Link>
                    <Link id="navSpon" to="/info/#sponsors" onClick={() => { window.scrollTo(retId("sponsors").offsetTop) }}>Sponsors</Link>
                    <Link id="navPriz" to="/info/#prizes" onClick={() => { window.scrollTo(retId("prizes").offsetTop) }}>Prizes</Link>
                    <Link id="navFaq" to="/info/#faqs">FAQ's</Link>
                </div>
                <button className="registerH navIReg">Register Me!</button>
            </div>
            <div className="divf fdirc allSects fullWH">
                <section id="about" className="divf about fullWH sectC">
                    <motion.div
                        className="posR fullWH">
                        <div className="designSectC1"></div>
                        <div className="divf fdirc alignL fullWH sectCard1">

                            <p className="mainH alignL ">{"<About />"}</p>

                            <div className="divf  alignL fullWH" style={{ "gap": "2rem" }}>
                                <img src={hackerMindset} className="hackerM1" />
                                <p className="alignL mainCon">idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                    idwfuheuffef eofjij duwndwndo wnduw
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </section>
                <section id="sponsors" className="divf about fullWH sectC sponsorS">
                    <motion.div className="posR fullWH"
                    >
                        <div className="designSectC1"></div>
                        <div className="divf fdirc alignL fullWH sectCard1 sponDiv">
                            <p className="mainH  ">{"<Sponsors />"}</p>
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
                    >
                        <div className="designSectC1"></div>
                        <div className="divf fdirc alignL fullWH sectCard1 sponDiv">
                            <p className="mainH  ">{"<Sponsors />"}</p>
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
            </div>

        </>
    )
}