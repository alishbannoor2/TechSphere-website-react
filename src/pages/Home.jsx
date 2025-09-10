import { ModeContext } from "../contexts/modeContext";
import Navbar from "../Navbar";
import React, { useContext } from "react";

function Home() {
    const { darkMode } = useContext(ModeContext);

    return (
        <>
            <div className="relative h-screen overflow-hidden">
                <video
                    key={darkMode ? "dark" : "light"}
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-full object-cover z-0"
                >
                    <source
                        src={`${darkMode ? "/bgDark.mp4" : "/bgLight.mp4"}`}
                        type="video/mp4"
                    />
                </video>

                <Navbar className="relative z-20" />

                {/* Hero Section */}
                <div className="absolute z-10 mx-20 mt-40">
                    <p
                        className={`text-8xl ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        We <br /> reimagine <br /> tomorrow
                    </p>
                    <p
                        className={`text-3xl pt-2 font-medium ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        Driving growth and molding the future through transformative change
                    </p>
                    <button className="my-4 px-10 py-3 bg-stone-300/80 hover:bg-stone-800/90 hover:scale-105 hover:text-white transition duration-300 hover:border-1 hover:border-white rounded-sm">
                        GET IN TOUCH
                    </button>
                </div>
            </div>

            {/* Extra Content */}
            <div
                className={`py-20 px-10 ${darkMode
                    ? "bg-gradient-to-b from-gray-900 to-black text-white"
                    : "bg-gradient-to-b from-gray-100 to-white text-black"
                    }`}
            >
                {/* Featured Services Section */}
                <section className="mb-20">
                    <h2 className="text-4xl font-semibold text-center mb-10">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">
                                Cloud Solutions
                            </h3>
                            <p className="text-sm">
                                Streamline your operations with scalable cloud
                                technology.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">
                                AI Integration
                            </h3>
                            <p className="text-sm">
                                Transform your business with cutting-edge
                                artificial intelligence.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">
                                Cybersecurity
                            </h3>
                            <p className="text-sm">
                                Protect your data and infrastructure with
                                top-notch security solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mb-20">
                    <h2
                        className={`text-4xl font-semibold text-center mb-10 ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        What Our Clients Say
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                        <div
                            className={`p-6 rounded-lg shadow-md ${darkMode
                                    ? "bg-gray-800 text-white hover:bg-gray-700"
                                    : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}
                        >
                            <p className="italic">
                                "TechSphere helped us scale our operations to a global audience
                                with ease. Their support team is exceptional!"
                            </p>
                            <span className="block text-right mt-4 text-sm font-semibold">
                                – Sarah T., CEO
                            </span>
                        </div>
                        <div
                            className={`p-6 rounded-lg shadow-md ${darkMode
                                    ? "bg-gray-800 text-white hover:bg-gray-700"
                                    : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}
                        >
                            <p className="italic">
                                "Their AI solutions transformed our data into meaningful
                                insights. Highly recommend working with them."
                            </p>
                            <span className="block text-right mt-4 text-sm font-semibold">
                                – James H., Data Scientist
                            </span>
                        </div>
                        <div
                            className={`p-6 rounded-lg shadow-md ${darkMode
                                    ? "bg-gray-800 text-white hover:bg-gray-700"
                                    : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}
                        >
                            <p className="italic">
                                "The cybersecurity solutions provided peace of mind for our
                                growing enterprise."
                            </p>
                            <span className="block text-right mt-4 text-sm font-semibold">
                                – Priya K., IT Manager
                            </span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold text-center mb-10">
                        Latest Updates
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold">
                                Our AI Summit 2025
                            </h3>
                            <p className="text-sm">
                                Discover the latest advancements in artificial
                                intelligence. Join us for an exciting summit
                                featuring industry leaders.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold">
                                Cloud Expansion Services
                            </h3>
                            <p className="text-sm">
                                We are now offering advanced cloud migration
                                services to make your business future-ready.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold">
                                Client Success Stories
                            </h3>
                            <p className="text-sm">
                                Learn how we’ve helped businesses like yours
                                achieve their goals through innovation.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;