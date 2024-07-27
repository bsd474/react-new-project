import {NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="max-w-sm mx-auto my-3">
            <ul className="flex items-center justify-between">
                <li className="hover:text-[#e9702f] duration-200">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-[#e9702f] duration-200">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="hover:text-[#e9702f] duration-200">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
    }
    export default Navbar;