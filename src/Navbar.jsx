import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ModeContext } from "./contexts/modeContext";
import { FiSun, FiMoon } from "react-icons/fi"
function Navbar() {
    const { darkMode, toggleMode } = useContext(ModeContext)
    return (
        <>
            <nav className={`py-5 border-b-1 absolute top-0 left-0 w-full flex flex-direction justify-between 
                ${darkMode
                    ? "border-white"
                    : "border-black"}`}>
                <div className={`text-2xl pl-20
                ${darkMode ? "text-white" : "text-black"}`}>TechSphere</div>
                <div>
                    <Link
                        to="/"
                        className={`mx-4 font-semibold text-sm hover:underline hover:scale-105 transition duration-300 inline-block
                            ${darkMode ? "text-white" : "text-black"}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/team"
                        className={`mx-4 font-semibold text-sm hover:underline hover:scale-105 transition duration-300 inline-block
                            ${darkMode ? "text-white" : "text-black"}`}
                    >
                        Team
                    </Link>
                </div>
                <div className="pr-20">
                    <button
                        className={`py-2 px-4 rounded-full ${darkMode ? "bg-stone-200/80" : "bg-stone-800/80 "} hover:scale-110 transition duration-300`}
                        onClick={toggleMode}>
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} className="text-white" />}

                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;