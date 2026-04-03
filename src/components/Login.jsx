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
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, { displayName: name });
        dispatch(setUser({ name, email }));
      } else {
        const res = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser({ name: res.user.displayName, email: res.user.email }));
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-black">

    
      <div
        className="hidden lg:flex flex-col justify-end w-1/2 bg-cover bg-center p-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&auto=format&fit=crop&q=80')`,
        }}
      >
        {/* Semi-transparent dark box sitting on top of the image */}
        <div className="bg-black bg-opacity-60 rounded-2xl p-6 max-w-sm">
          <p className="text-white text-2xl font-bold mb-2">Millions of videos.</p>
          <p className="text-gray-300 text-sm">Watch, share, and create — all in one place.</p>
        </div>
      </div>

      {/* RIGHT — form panel with dark background */}
      <div className="flex flex-1 flex-col items-center justify-center bg-neutral-950 px-6 py-12">


        {/* Form card */}
        <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl px-8 py-8">

          <h2 className="text-xl font-bold text-white mb-1">
            {isSignUp ? "Create account" : "Sign in"}
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            {isSignUp ? "Join MyTube today" : "to continue to MyTube"}
          </p>

          {isSignUp && (
            <div className="mb-4">
              <label className="block text-xs text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-600 outline-none focus:border-red-500 transition"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-xs text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-600 outline-none focus:border-red-500 transition"
            />
          </div>

          <div className="mb-5">
            <label className="block text-xs text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-600 outline-none focus:border-red-500 transition"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs mb-4 bg-red-950 border border-red-800 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold transition"
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>

          <p
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-center text-sm text-gray-500 mt-5 cursor-pointer hover:text-white transition"
          >
            {isSignUp ? "Already have an account? " : "New here? "}
            <span className="text-red-400 font-medium">
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>

        <p className="text-white text-xs mt-6 text-center">
          By continuing, you agree to MyTube's Terms of Service
        </p>
      </div>
    </div>
  );
}

export default Login;
