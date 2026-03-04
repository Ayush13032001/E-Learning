import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import { ArrowUp } from "lucide-react";

// ✅ Lazy Loaded Pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Faculty = lazy(() => import("./Pages/Faculty"));
const Courses = lazy(() => import("./Pages/Courses"));
const CourseDetailPageHome = lazy(() => import("./Pages/CourseDetailPageHome"));
const CourseDetailPage = lazy(() => import("./Pages/CourseDetailPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Blog = lazy(() => import("./Pages/Blog"));

// ✅ Protected Route
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return Boolean(token);
  };

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

// ✅ Scroll To Top On Route Change
const ScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
};

// ✅ Scroll Top Button
const ScrollTopButton = ({ threshold = 200, showOnMount = false }) => {
  const [visible, setVisible] = useState(!!showOnMount);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={
        "fixed right-6 bottom-6 z-50 p-2 rounded-full focus:outline-none focus:ring-sky-300 " +
        "backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer transition-transform"
      }
    >
      <ArrowUp className="w-6 h-6 text-sky-600 drop-shadow-sm" />
    </button>
  );
};

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />

      {/* ✅ Suspense Loader */}
      <Suspense
        fallback={
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "5px solid #e5e7eb",
                borderTop: "5px solid #0ea5e9",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />

          <Route
            path="/course/:id"
            element={
              <ProtectedRoute>
                <CourseDetailPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/courses/:id"
            element={
              <ProtectedRoute>
                <CourseDetailPageHome />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ScrollTopButton threshold={250} />

      {/* ✅ Inline Animation */}
      <style>
        {`
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}

export default App;
