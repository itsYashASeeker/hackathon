import "../css/index.css";
import "../css/navbar.css";
import IETLogo from "../assets/IET_LOGO.png";
import postmanLogo from "../assets/postman_logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavInfo() {
    const navigate = useNavigate();
    return (
        <>
            <div className="navbar divf jusSpaceB navInfo">
                <div className="divf allLinks">
                    <Link to="/">Home</Link>
                    <Link className="aRN" to="/info/#about">About</Link>
                    <Link to="/info/#sponsors">Sponsors</Link>
                    <Link to="/info/#prizes">Prizes</Link>
                    <Link to="/info/#faqs">FAQ's</Link>
                </div>
                <button className="registerH navIReg">Register Me!</button>
            </div>
        </>
    )
}