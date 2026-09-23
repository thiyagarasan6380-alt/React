import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="w-64 bg-gradient-to-b from-orange-500 to-orange-700 text-white min-h-screen p-5">

            <h1 className="text-2xl font-bold mb-8">
                Student Hub
            </h1>

            <div className="flex flex-col gap-4">

                <Link to="/">Home</Link>

                <Link to="/projects">Projects</Link>

                <Link to="/createproject">Create Project</Link>

                <Link to="/login">Login</Link>

            </div>

        </div>
    );
}

export default Sidebar;