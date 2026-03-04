import React from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
// import Not from "../assets/Page Not Found 404.json";
import Error from "../assets/Error 404.json";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 text-center">
      {/* Lottie Animation */}
      <div className="w-72 sm:w-96">
        <Lottie animationData={Error} loop={true} />
      </div>

      {/* Text Section */}
      {/* <h1 className="text-5xl font-bold text-gray-800 mt-6">404</h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mt-2">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-500 mt-3 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p> */}

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-10 py-4 text-lg font-bold rounded-3xl 
  text-white shadow-2xl backdrop-blur-md
  transition-all duration-300 transform active:scale-95
  hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
  bg-gradient-to-br from-indigo-500/80 to-purple-600/80"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
