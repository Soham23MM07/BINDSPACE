import { LandingPage } from "../pages/LandingPage";
import { Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "../auth/SignIn";
import SignUpPage from "../auth/SignUp";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};
