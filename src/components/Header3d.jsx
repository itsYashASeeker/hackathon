import { useEffect, useState } from "react";
import hackL from "../assets/hack.png";


export default function Header3d() {



    const [headS, setHeadS] = useState({
        offSetX: "",
        offSetY: "",
        friction: 1 / 38
    })


    window.addEventListener("mousemove", mouseMove)
    function mouseMove(e) {
        let followX = (window.innerWidth / 2 - e.clientX);
        let followY = (window.innerHeight / 2 - e.clientY);
        let ffr = headS.friction;
        let x = 0,
            y = 0;
        x += ((-followX - x) * ffr);
        y += (followY - y) * ffr;
        setHeadS({
            ...headS,
            offSetX: x,
            offSetY: y
        });
    }

    // useEffect(() => {
    //     document.getElementById("idheader3rd").style = `perspective(600px)
    //               rotateY(${headS.offSetX}deg)
    //               rotateX(${headS.offSetY}deg)`
    // }, headS)

    return (
        <>
            <div id="idheader3rd" className="header3d divf" style={{
                transform: ` perspective(700px)
                  rotateY(${headS.offSetX}deg)
                  rotateX(${headS.offSetY}deg)`
            }}
            >
                {/* <span className="inHack">Hack</span> */}
                <img src={hackL} className="inHack" />
                <span className="inMela">मेला</span></div>
        </>
    )
}