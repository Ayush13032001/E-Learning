import React from "react";
import profile from "../assets/pprofile.png";

const ProfileHero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 pl-50">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Profile Image Section */}
        <div className="relative group">
          {/* 🌟 Yellow Glow Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-300 via-amber-300 to-orange-300 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse"></div>

          {/* 💛 Yellow Gradient Ring */}
          <div className="relative rounded-full p-[6px] bg-gradient-to-tr from-yellow-400 via-amber-400 to-orange-400">
            {/* Image Circle */}
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl">
              <img
                src={profile}
                alt="Nitish Singh"
                className="
                  w-full h-full
                  object-cover object-center
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <div className="h-0.5 w-16 bg-slate-200"></div>

            <h1 className="text-4xl md:text-6xl font-extralight text-slate-800 tracking-tight">
              Meet{" "}
              <span className="font-semibold text-slate-900">Nitish Singh</span>
            </h1>

            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-slate-500 font-medium">
              (YouTuber, Educator, Entrepreneur)
            </p>

            <div className="h-0.5 w-full bg-slate-100"></div>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              Hi, my name is{" "}
              <span className="font-normal text-slate-800">Nitish</span>. I am
              an educational content creator on YouTube with
              <span className="font-semibold text-blue-600">
                {" "}
                130K+ Subscribers
              </span>{" "}
              in the domain of Data Science.
            </p>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mt-4">
              I have been in the tech industry for the past{" "}
              <span className="italic">10 years</span> and taught more than{" "}
              <span className="font-normal text-slate-800">
                50,000 students
              </span>{" "}
              offline. I am passionate about data and take pride in creating
              content that simplifies complex topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
