import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Layout = () => {
  const { isSignedIn, isLoaded } = useUser();


  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Layout;