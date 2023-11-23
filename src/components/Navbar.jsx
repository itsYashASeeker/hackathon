import "../css/index.css";
import "../css/navbar.css";
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
                    <img src={IETLogo} className="logo1" />
                    <p className="xForLogo">X</p>
                    <img src={postmanLogo} className="logo1" />
                </div>
                
                {/* <div className="lights"></div> */}
            </div>
        </>
    )
}