import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    try {
      if (isSignUp) {
        // Sign Up
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, { displayName: name });
        dispatch(setUser({ name, email }));
      } else {
        // Sign In
        const res = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser({ name: res.user.displayName, email: res.user.email }));
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 outline-none focus:border-purple-400"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 outline-none focus:border-purple-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 outline-none focus:border-purple-400"
        />

        {error && <p className="text-red-500 text-xs mb-3">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          {isSignUp ? "Create Account" : "Sign In"}
        </button>

        <p
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-purple-600"
        >
          {isSignUp ? "Already have an account? Sign In" : "New here? Sign Up"}
        </p>
      </div>
    </div>
  );
}

export default Login;