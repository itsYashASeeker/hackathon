
import Navbar from "./Navbar";
import "../css/index2.sass";
import Hacker1 from "../assets/hacker1.svg"
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";

import { Suspense, useEffect, useRef, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { ModelC } from "./End_of_line_club";
import Header3d from "./Header3d";
import "../css/navbar.css";
import IETLogo from "../assets/IET_LOGO.png";
import postmanLogo from "../assets/postman_logo.png";
import { useNavigate } from "react-router-dom";
import CountDown from "./CountDown";
import { motion } from "framer-motion";
import HackmelaI from "../assets/hackmela_title.png";

import "../css/index.css";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });




function LoaderBeforeModel() {
    return (
        <>
            <div className="mainContainer loadBeforeBG">
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>

                <div className="loadBeB divf fdirc">
                    <div className="divf logoCon loadBeDI">
                        <motion.img
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, type: "spring" }}
                            src={IETLogo} className="logo1" />
                        <motion.p className="xForLogo"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.7, type: "spring" }}
                        >X</motion.p>
                        <motion.img
                            initial={{ x: 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.4, type: "spring" }}
                            src={postmanLogo} className="logo1" />
                    </div>
                    <motion.p
                        initial={{ y: -40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1, type: "spring" }}
                        className="pres">Presents....</motion.p>
                </div>
                {/* <div className="animLoaderD">

                </div> */}
            </div>
        </>
    )
}

function LoadTheModel() {
    return (
        <>
            <div id="idLoadM" className="mainContainer">
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>

                <div className="loaderAnim divf fdirc">
                    <p className="lP">Loading</p>
                    <div className="ac"></div>
                </div>
            </div>
        </>
    )
}

export function BgOptional() {
    return (
        <div id="idOptMB" className="mainContainer mainToBack">
            {/* <div className="blurAn">
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
                <div className="b4"></div>
            </div> */}
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>


        </div>
    )
}


export default function Home() {

    // useEffect(() => {
    //     if (document.readyState === "complete") {
    //         console.log("Model loaded");
    //     }
    // }, [])


    const [homeB, setHomeB] = useState(true);
    const [hTitle, setHTitle] = useState(false);
    const navigate = useNavigate();


    const learnMoreC = (e) => {
        var cursDot = document.getElementById("idExDot")
        cursDot.classList.add("doExpandDot")
        setTimeout(() => {
            navigate("/info")
        }, 1000);
    }

    useEffect(() => {
        let unmounted = false;
        setTimeout(() => {
            setHomeB(false);
        }, 3000)
        return () => (unmounted = true);
    }, [])

    useEffect(() => {
        let unmounted = false;
        setTimeout(() => {
            setHTitle(true);
        }, 3500)
        return () => (unmounted = true);
    }, [])

    useEffect(() => {
        const root_theme = document.querySelector(':root');
        // const root_btn = document.querySelector('.btn-css-v');
        // root_btn.addEventListener('click', () => {

        if (window.screen.height > window.screen.width) {
            root_theme.style.setProperty('--max-sizeC', '110vh');
        }
        else {
            root_theme.style.setProperty('--max-sizeC', '110vw');
        }

        // })
    }, [])


    return (
        <>


            {/* <LoaderBeforeModel /> */}
            {homeB ?
                <div className="divf fdirc mainbg">
                    <LoaderBeforeModel />
                </div>
                :
                <></>}
            {hTitle ?
                <>
                    <div className="divf fdirc mainbg">
                        <Navbar />
                        <div className="mainC blendContainer">

                            {/* {homeB === false && hTitle === false ?
                        <LoadTheModel />
                        : <></>
                    } */}

                            <BgOptional />
                            {/* <div > */}
                            {/* <Suspense fallback={<null />}>
                                <Canvas id="canvas">
                                    <ambientLight />
                                    <OrbitControls
                                        enableZoom={false}
                                        enableDamping={false}
                                        enableRotate={false}
                                    />

                                    <ModelC />

                                    <Environment preset="sunset" background />

                                </Canvas>
                            </Suspense> */}
                            {/* </div> */}



                            <div className="divf fdirc fullWH  MidCH ">
                                <div className="divf fdirc d1">
                                    {/* <img src={HackmelaI} className="hackTitle1" /> */}
                                    <Header3d />
                                </div>
                                <div className="divf fdirc d2">
                                    <CountDown />
                                    <button className="registerH">Register Now!</button>
                                </div>

                            </div>
                            <button className="learnMoreB specB1" onClick={(e) => learnMoreC(e)}>Learn More</button>
                        </div>
                        <div id="idExDot" className="expandDotB"></div>
                    </div>
                </>
                : <></>
            }

        </>
    )
}