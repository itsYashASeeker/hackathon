import "../css/index.css";
import "../css/navbar.css";
import kjsitLogo from "../assets/kjsit.jpg";
import IETLogo from "../assets/IET_LOGO.png";
import postmanLogo from "../assets/postman_logo.png";
import hmLogo from "../assets/hm.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="navbar divf jusSpaceB">
                <Link className="logoKhaas" to="/">
                    <img src={hmLogo} className="hmKhaas" />
                </Link>
                {/* <div className="" */}
                <div className="divf logoCon">
                    <Link className="divf" to="https://kjsit.somaiya.edu.in/" target="_blank"><img src={kjsitLogo} className="logo1" /></Link>
                    <p className="xForLogo">|</p>
                    <Link className="divf" to='https://iet.org/' target="_blank"><img src={IETLogo} className="logo1" /></Link>
                    <p className="xForLogo">X</p>
                    <Link className="divf" to="https://academy.postman.com/page/students" target="_blank"><img src={postmanLogo} className="logo1" /></Link>
                </div>

                {/* <div className="lights"></div> */}
            </div>
        </>
    )
}