import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ModeContext } from "../contexts/modeContext";
import Navbar from "../Navbar";

function Team() {
    const [team, setTeam] = useState([]);
    const { darkMode } = useContext(ModeContext);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setTeam(response.data);
            })
            .catch((error) => {
                console.error("Error fetching team members list", error);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div
                className={`min-h-screen pt-20 pb-10 px-20 ${darkMode
                    ? "bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white"
                    : "bg-gradient-to-b from-gray-400 via-gray-100 to-white text-black"
                    }`}
            >
                <h2 className="font-medium text-3xl my-10 text-center">
                    Meet Our Amazing Team
                </h2>
                {team.length === 0 ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <li
                                key={member.id}
                                className={`${darkMode
                                    ? "bg-gray-800 hover:bg-gray-700"
                                    : "bg-gray-100 hover:bg-gray-200"
                                    } transition-all transform hover:scale-105 rounded-lg shadow-lg p-6 flex flex-col items-center`}
                            >
                                <div className="mb-3">
                                    <span className="font-bold text-lg">
                                        {member.name}
                                    </span>
                                </div>
                                <span className="text-sm text-gray-500">
                                    {member.username}
                                </span>
                                <span className="text-sm">{member.email}</span>
                                <span className="text-sm text-blue-500 underline hover:text-blue-400">
                                    {member.website}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Team;