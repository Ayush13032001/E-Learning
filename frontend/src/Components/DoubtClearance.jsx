import React, { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

const DoubtClearance = () => {
  const [open, setOpen] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  // Close modal on ESC
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Handle iframe loading + scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      const id = requestAnimationFrame(() => {
        setLoadVideo(true);
      });

      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = "";
        setLoadVideo(false);
      };
    }
  }, [open]);

  return (
    <>
      {/* ===== Page Content ===== */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div
          className="
      py-20 px-6
      max-w-7xl mx-auto
     
    "
        >
          {/* Title */}
          <h1
            className="
        text-center text-5xl font-extrabold mb-16
        text-transparent bg-clip-text
        bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
      "
          >
            Doubt Clearance
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold leading-tight text-slate-800">
                Our Awesome <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500">
                  Doubt Support
                </span>
              </h2>

              <ul className="space-y-4 text-lg text-slate-700">
                {[
                  "One-on-one doubt clearance over Zoom call",
                  "Discord server for paid members",
                  "Doubt clearance after live classes",
                  "On-demand doubt clearance classes on difficult topics",
                  "Past batch students rated our doubt support 9.24 out of 10",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-500 mt-1 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-lg font-medium text-slate-600">
                Checkout the video to see how doubt support works
              </p>
            </div>
            {/* Video Thumbnail */}
            <div
              onClick={() => setOpen(true)}
              className="relative cursor-pointer group rounded-2xl overflow-hidden
  shadow-lg"
            >
              <img
                src="https://img.youtube.com/vi/zicIMQNObA0/maxresdefault.jpg"
                alt="Doubt Clearance Video"
                className="rounded-xl shadow-lg"
              />

              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 fill-white ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {open && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center
            bg-black/80 backdrop-blur-sm
          "
          onClick={() => setOpen(false)}
        >
          <div
            className="
              relative w-[95%] max-w-6xl
              aspect-video
              bg-black rounded-2xl
              overflow-hidden shadow-2xl
              border border-white/20
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-4 right-4 z-50
                bg-white/90 hover:bg-white
                text-black rounded-full
                p-2 shadow-lg
                transition
              "
            >
              <X />
            </button>

            {/* Lazy-loaded iframe */}
            {loadVideo && (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zicIMQNObA0?rel=0"
                title="Doubt Clearance"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DoubtClearance;
