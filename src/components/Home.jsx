import "../css/index.css";
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
import { motion } from "framer-motion"


// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });


function LoaderBeforeModel() {
    return (
        <>
            <div className="mainContainer">
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
                            initial={{ x: -40 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", type: "spring" }}
                            src={IETLogo} className="logo1" />
                        <p className="xForLogo"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.4, ease: "easeOut", type: "spring" }}
                        >X</p>
                        <motion.img
                            initial={{ x: 40 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", type: "spring" }}
                            src={postmanLogo} className="logo1" />
                    </div>
                    <p
                        initial={{ y: -40 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 1, ease: "easeOut", type: "spring" }}
                        className="pres">Presents....</p>
                </div>
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
            <div className="blurAn">
                <div className="b1"></div>
                <div className="b2"></div>
            </div>
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
        }, 2000)
        return () => (unmounted = true);
    }, [])




    return (
        <>

            <div className="divf fdirc mainbg">

                {homeB ?
                    <LoaderBeforeModel />
                    :
                    <></>}
                {hTitle ?
                    <>
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



                            <div className="divf fdirc fullWH MidCH">
                                <Header3d />
                                <CountDown />
                                <button className="registerH">Register Now!</button>
                            </div>
                            <button className="learnMoreB specB1" onClick={(e) => learnMoreC(e)}>Learn More</button>
                        </div>
                        <div id="idExDot" className="expandDotB"></div>
                    </>
                    : <></>
                }
            </div >

        </>
    )
}