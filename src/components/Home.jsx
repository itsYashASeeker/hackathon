import "../css/index.css";
import Navbar from "./Navbar";
import "../css/index2.sass";
import Hacker1 from "../assets/hacker1.svg"
import { Canvas } from "@react-three/fiber";
import ModelC from "./ModelC";



export default function Home() {
    return (
        <>
            <div className="divf fdirc mainbg">
                <div className="mainContainer">
                    <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <Navbar />
                {/* <div className="lights"></div> */}

                <div className="divf mainC posR fullWH">
                    <img src={Hacker1} className="hackerImg" />
                    <Canvas>
                        <ModelC />
                    </Canvas>
                </div>

            </div>
        </>
    )
}