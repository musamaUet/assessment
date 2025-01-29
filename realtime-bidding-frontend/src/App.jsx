import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Subscription from "./pages/Subscription";
import { ROUTES } from "./constants/routes";
import DefaultLayout from "./components/Layout";
import { isAuthenticated } from "./utils/utils";
import SavedQuestions from "./pages/SavedQuestions";

const {
  LOGIN,
  HOME,
  SIGN_UP,
  SUBSCRIPTION,
  SAVED_QUESTIONS,
} = ROUTES;

// Auth Guard Component
const AuthGuard = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to={LOGIN} />;
};

const AppRoutes = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Routes>
        {/* Public Routes */}
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGN_UP} element={<Signup />} />

        {/* Protected Route */}
        <Route
          path={HOME}
          element={
            <AuthGuard>
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            </AuthGuard>
          }
        />
        <Route
          path={SUBSCRIPTION}
          element={
            <AuthGuard>
              <DefaultLayout>
                <Subscription />
              </DefaultLayout>
            </AuthGuard>
          }
        />
        <Route
          path={SAVED_QUESTIONS}
          element={
            <AuthGuard>
              <DefaultLayout>
                <SavedQuestions />
              </DefaultLayout>
            </AuthGuard>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to={LOGIN} />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
