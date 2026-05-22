import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useAuth, useUser } from "@clerk/clerk-react";

import { Outlet, Navigate } from "react-router-dom";
import api from "@/api/axios";
import { Toaster } from "react-hot-toast";
const Layout = () => {
  const { isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth();
  const { user } = useUser();
  useEffect(() => {
    const saveUser = async () => {
      try {
        if (!isLoaded || !user) return;

        const token = await getToken();

        const response = await api.post(
          "/user/save-user",
          {
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
            image: user.imageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("User saved successfully:", response.data);
      } catch (error) {
        console.error(
          "Error saving user:",
          error.response?.data || error.message,
        );
      }
    };

    if (isLoaded && user) {
      saveUser();
    }
  }, [user, isLoaded, getToken]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div>
      <Toaster   position="top-right"/>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
