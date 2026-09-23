import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import CreateProject from "./pages/CreateProject";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
      

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