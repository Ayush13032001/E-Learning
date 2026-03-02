import React from "react";
import CountUpOnHover from "./CountUpOnHover";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-transform duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            <CountUpOnHover end={900000} duration={800} />
          </span>{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            Trusted Learners and Professionals
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-600 text-base sm:text-lg transition-transform duration-300 hover:scale-105">
          Learn Full Stack, DevOps, and Java with industry-level projects,
          mentorship, and a supportive student community — all in Hindi.
        </p>

        {/* Avatars */}
        <div className="flex justify-center items-center mt-8 -space-x-3">
          {[
            "https://randomuser.me/api/portraits/men/32.jpg",
            "https://randomuser.me/api/portraits/men/45.jpg",
            "https://randomuser.me/api/portraits/men/12.jpg",
            "https://randomuser.me/api/portraits/men/76.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="student"
              className="w-10 h-10 rounded-full border-2 border-white shadow"
            />
          ))}
          <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm border-2 border-white shadow">
            +N
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-gray-500">
          Real students. Real results.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-900 flex items-center gap-2 mx-auto hover:bg-black hover:text-white transition-all duration-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Visit Premium Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
