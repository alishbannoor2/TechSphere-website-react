import React, { useContext } from "react";
import { ModeContext } from "../contexts/modeContext";

function Footer() {
    const { darkMode } = useContext(ModeContext)

    return (
        <>
            <footer className={`p-10 
                ${darkMode ? "bg-stone-800" : "bg-stone-300"}`}>

                <table className={`table-auto w-full text-left text-sm ${darkMode ? "text-stone-300" : "text-black"}`}>
                    <thead>
                        <tr>
                            <td colSpan="2" className="px-2 py-1 font-bold hover:underline">Services</td>
                            <td className="px-2 py-1 font-bold hover:underline">Industries</td>
                            <td className="px-2 py-1 font-bold hover:underline">Insights</td>
                            <td className="px-2 py-1 font-bold hover:underline">Quick Links</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-2 py-1 hover:underline">Digital</td>
                            <td className="px-2 py-1 hover:underline">Cloud</td>
                            <td className="px-2 py-1 hover:underline">Communication</td>
                            <td className="px-2 py-1 hover:underline">Business Applications</td>
                            <td className="px-2 py-1 hover:underline">Business Applications</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 hover:underline">Digital Counseling</td>
                            <td className="px-2 py-1 hover:underline">Cloud Operations</td>
                            <td className="px-2 py-1 hover:underline">Banking & Finance</td>
                            <td className="px-2 py-1 hover:underline">Banking & Finance</td>
                            <td className="px-2 py-1 hover:underline">Banking & Finance</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 hover:underline">DevOps</td>
                            <td className="px-2 py-1 hover:underline">AI & Machine Learning</td>
                            <td className="px-2 py-1 hover:underline">Healthcare</td>
                            <td className="px-2 py-1 hover:underline">Tech Trends</td>
                            <td className="px-2 py-1 hover:underline">About Us</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 hover:underline">Cybersecurity</td>
                            <td className="px-2 py-1 hover:underline">Blockchain</td>
                            <td className="px-2 py-1 hover:underline">Retail</td>
                            <td className="px-2 py-1 hover:underline">Case Studies</td>
                            <td className="px-2 py-1 hover:underline">Privacy Policy</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 hover:underline">Cloud Migration</td>
                            <td className="px-2 py-1 hover:underline">Big Data Analytics</td>
                            <td className="px-2 py-1 hover:underline">Education</td>
                            <td className="px-2 py-1 hover:underline">White Papers</td>
                            <td className="px-2 py-1 hover:underline">Terms of Service</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 hover:underline">IT Consulting</td>
                            <td className="px-2 py-1 hover:underline">IoT Solutions</td>
                            <td className="px-2 py-1 hover:underline">E-Commerce</td>
                            <td className="px-2 py-1 hover:underline">Blogs</td>
                            <td className="px-2 py-1 hover:underline">Contact Us</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="px-2 py-1 font-bold hover:underline">Careers</td>
                            <td className="px-2 py-1 font-bold hover:underline">Company</td>
                            <td colSpan="2" className="px-2 py-1 font-bold hover:underline">Support</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="px-2 py-1 hover:underline">Join Our Team</td>
                            <td className="px-2 py-1 hover:underline">Leadership</td>
                            <td colSpan="2" className="px-2 py-1 hover:underline">Customer Service</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="px-2 py-1 hover:underline">Internships</td>
                            <td className="px-2 py-1 hover:underline">Our Story</td>
                            <td colSpan="2" className="px-2 py-1 hover:underline">FAQs</td>
                        </tr>
                    </tbody>
                </table>
                <div className={`border-t-1 mt-3  pt-4 text-xs text-center
                ${darkMode ? "text-stone-400 border-stone-400" : "text-black border-black"}`}>
                    © 2025 TechSphere
                </div>
            </footer>
        </>
    )

}

export default Footer;