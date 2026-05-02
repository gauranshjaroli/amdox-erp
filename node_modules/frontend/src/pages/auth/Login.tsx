import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex">
      
      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 bg-linear-to-br from-blue-700 to-purple-700 text-white flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold mb-4">AMDOX TECHNOLOGIES</h1>
        <h2 className="text-2xl font-semibold mb-2">AI-Powered Cloud ERP Suite</h2>
        <p className="text-center max-w-sm">
          Smart. Secure. Scalable. All your business operations, one intelligent platform.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-gray-500 mb-6">Sign in to continue</p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-3 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-3 border rounded"
          />

          <div className="flex justify-between text-sm mb-4">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <span className="text-blue-600 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Sign In
          </button>

          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;