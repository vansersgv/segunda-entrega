import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const logo = "../img/cerdeco.png";
    return (
        <header>
            <Link to={"/"}>
                <img className="imgLogo" src={logo} alt="" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/categoria/2"}> CUENCOS </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categoria/3"}> TAZAS </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categoria/4"}> MACETAS </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar