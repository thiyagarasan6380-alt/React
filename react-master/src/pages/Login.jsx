import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login() {
    const [studentName, setStudentName] = useState("");
    const navigate = useNavigate();
    function handleLogin() {

    if (!studentName.trim()) {
        alert("Enter your name");
        return;
    }

    localStorage.setItem("user", studentName);

    alert("Login Successful");

    navigate("/");
}
    function handleLogin() {
    if (!studentName.trim()) {
        alert("Enter your name");
        return;
    }

    localStorage.setItem("user", studentName);

    navigate("/");
    window.location.reload();
}
  return (
    <div className="min-h-screen bg-orange-50 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-orange-600 text-center">
          Login
        </h1>

        <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="w-full border p-3 rounded-lg mt-6"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mt-4"
        />

        <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6"
        >
            Login
        </button>

      </div>

    </div>
  );
}

export default Login;