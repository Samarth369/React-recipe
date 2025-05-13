import { Link } from "react-router-dom"
import'../style/Nav.css'

export default function Nav () {
    return (
        <>
        <div className="nav-bar">
            <nav>
                <Link to={"/"}>Home</Link> <span>/</span>
                <Link to={"/favrate"}>Favorites</Link> <span>/</span>
                <Link to={"/About"}>About</Link> 
           </nav>
        </div>
        </>
    )
}