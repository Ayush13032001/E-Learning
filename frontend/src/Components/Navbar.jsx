import React, { useEffect, useRef, useState } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import {
  Home,
  BookOpen,
  BookMarked,
  Users,
  Contact,
  Rss,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth, useClerk, UserButton, useUser } from "@clerk/clerk-react";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "About", icon: BookMarked, href: "/about" },
  { name: "Faculty", icon: Users, href: "/faculty" },
  { name: "Blog", icon: Rss, href: "/blog" },
  { name: "Contact", icon: Contact, href: "/contact" },
];

const Navbar = () => {
  const { openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  //for mobile menu

  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuRef = useRef(null);
  const isLoggedIn = isSignedIn && Boolean(localStorage.getItem("token"));

  // fetch token on sign in
  useEffect(() => {
    const loadToken = async () => {
      if (isSignedIn) {
        try {
          const token = await getToken();
          localStorage.setItem("token", token);
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      }
    };

    loadToken();
  }, [isSignedIn, getToken]);

  //remove token on sign out
  useEffect(() => {
    if (!isSignedIn) {
      localStorage.removeItem("token");
    }
  }, [isSignedIn]);

  // Instant removal of token on Clerk logout event

  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem("token");
      console.log("Token removed instantly on Clerk logout event");
    };

    window.addEventListener("user:signed_out", handleLogout);
    return () => window.removeEventListener("user:signed_out", handleLogout);
  }, []);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (scrollY > lastScrollY && scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const desktopLinkClass = (isActive) =>
    `${navbarStyles.desktopNavItem} ${
      isActive ? navbarStyles.desktopItemActive : ""
    }`;

  const mobileLinkClass = (isActive) =>
    `${navbarStyles.mobileMenuItem} ${
      isActive
        ? navbarStyles.mobileMenuItemActive
        : navbarStyles.mobileMenuItemHover
    }`;

  return (
    <nav
      className={`${navbarStyles.navbar} ${
        showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden
      } ${isScrolled ? navbarStyles.navbarScrolled : navbarStyles.navbarDefault}`}
    >
      <div className={navbarStyles.container}>
        {/* MAIN FLEX ROW */}
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3 select-none">
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* CENTER: Navigation */}
          <div className="flex-1 flex justify-center">
            <div className={navbarStyles.desktopNav}>
              <div className={navbarStyles.desktopNavContainer}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      end={item.href === "/"}
                      className={({ isActive }) => desktopLinkClass(isActive)}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon
                          size={18}
                          className={navbarStyles.desktopNavIcon}
                        />
                        <span className={navbarStyles.desktopNavText}>
                          {item.name}
                        </span>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Actions (optional) */}
          <div className={navbarStyles.authContainer}>
            {!isSignedIn ? (
              <button
                type="button"
                onClick={() => openSignUp({})}
                className={
                  navbarStyles.createAccountButton ?? navbarStyles.loginButton
                }
              >
                <span>Create Account</span>
              </button>
            ) : (
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}

            {/* Toggle */}
            <button
              className={navbarStyles.mobileMenuButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div
          ref={menuRef}
          className={`${navbarStyles.mobileMenu} ${isOpen ? navbarStyles.mobileMenuOpen : navbarStyles.mobileMenuClosed}`}
        >
          <div className={navbarStyles.mobileMenuContainer}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => mobileLinkClass(isActive)}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={navbarStyles.mobileMenuIconContainer}>
                    <Icon size={18} className={navbarStyles.mobileMenuIcon} />
                  </div>
                  <span className={navbarStyles.mobileMenuText}>
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
            {!isSignedIn ? (
              <button
                type="button"
                onClick={() => {
                  openSignUp({});
                  setIsOpen(false);
                }}
                className={
                  navbarStyles.mobileCreateAccountButton ??
                  navbarStyles.mobileLoginButton
                }
              >
                <span>Create Account</span>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={navbarStyles.backgroundPattern}>
        <div className={navbarStyles.pattern}></div>
      </div>
    </nav>
  );
};

export default Navbar;
