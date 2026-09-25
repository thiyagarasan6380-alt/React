import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import CreateProject from "./pages/CreateProject";
import Sidebar from "./components/Sidebar";

function App() {

    const user = localStorage.getItem("user");

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 p-4">

                {user && (
                    <div className="flex justify-end items-center gap-3 mb-4">

                        <span className="font-semibold text-orange-600">
                            👤 {user}
                        </span>

                        <button
                            onClick={() => {
                                localStorage.removeItem("user");
                                window.location.reload();
                            }}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg"
                        >
                            Logout
                        </button>

                    </div>
                )}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/CreateProject" element={<CreateProject />} />
                </Routes>

            </div>

        </div>
    );
}

export default App;