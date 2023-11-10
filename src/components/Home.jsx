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
                    <div className="divf logoCon">
                        <img src={IETLogo} className="logo1" />
                        <p className="xForLogo">X</p>
                        <img src={postmanLogo} className="logo1" />
                    </div>
                    <p className="pres">Presents....</p>
                </div>
            </div>
        </>
    )
}

function LoadTheModel() {
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

                <div className="loaderAnim divf fdirc">
                    <p className="lP">Loading</p>
                    <div className="ac"></div>
                </div>
            </div>
        </>
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
        const posX = e.clientX;
        const posY = e.clientY;

        cursDot.style.left = `${posX}px`;
        cursDot.style.top = `${posY}px`;
        cursDot.classList.add("doExpandDot")
        setTimeout(() => {

        })
    }

    useEffect(() => {
        let unmounted = false;
        setTimeout(() => {
            // hello
            setHomeB(false);
        }, 3000)

        return () => (unmounted = true);
    }, [])

    useEffect(() => {
        let unmounted = false;
        setTimeout(() => {
            // hello
            setHTitle(true);
        }, 8000)

        return () => (unmounted = true);
    }, [])




    return (
        <>

            <div className="divf fdirc mainbg">

                {homeB ?
                    <LoaderBeforeModel />
                    :
                    <></>}

                <div className="mainC posR blendContainer">
                    {hTitle ?
                        <Navbar /> : <></>}

                    <Suspense fallback={<LoadTheModel />}>
                        <Canvas >
                            <ambientLight />
                            <OrbitControls
                                enableZoom={false}
                                enableDamping={false}
                                enableRotate={false}
                            />

                            <ModelC />

                            <Environment preset="sunset" background />

                        </Canvas>
                    </Suspense>
                    {hTitle ?
                        <div className="divf fdirc fullWH MidCH">
                            <Header3d />
                            <CountDown />
                            <button className="registerH">Register Now!</button>
                        </div>
                        : <></>
                    }
                    {/* {hTitle ? <Header3d /> : <></>}
                    {hTitle ? <button className="registerH">Register Now!</button> : <></>} */}
                    {hTitle ? <><button className="learnMoreB specB1" onClick={(e) => learnMoreC(e)}>Learn More</button><div id="idExDot" className="expandDotB"></div></> : <></>}
                </div>

            </div >

        </>
    )
}