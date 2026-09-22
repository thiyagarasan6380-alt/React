import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/projects">Projects</Link>
        {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/CreateProject">CreateProject</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CreateProject" element={<CreateProject />} />
      </Routes>

    </div>
  );
}

export default App;