import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import DashboardPage from "./pages/app/DashboardPage.jsx";
import Layout from "./pages/app/Layout.jsx";
import SigninPage from "./pages/auth/SigninPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ResumeBuilder from "./pages/app/ResumeBuilder.jsx";

const App = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="app" element={<Layout />}>
          <Route index element={<DashboardPage setTitle={setTitle} />} />
          <Route
            path="resume-builder"
            element={<ResumeBuilder title={title} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
