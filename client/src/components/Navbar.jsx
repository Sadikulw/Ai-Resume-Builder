import { useUser, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5">

        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.svg"
            alt="ResumeForge"
            className="h-13   object-contain  w-auto"
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <p className="text-sm text-slate-700 max-sm:hidden">
            Hi, {user?.firstName}
          </p>

          {/* Clerk User Button */}
          <UserButton afterSignOutUrl="/" />

        </div>
      </nav>
    </header>
  );
};

export default Navbar;