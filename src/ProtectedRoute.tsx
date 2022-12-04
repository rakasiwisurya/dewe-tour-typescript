import React, { useState } from "react";
import { Navigate } from "react-router-dom";

interface ProtectRoute {
  redirectPath: string;
  children: React.ReactNode;
}

const ProtectedRoute = ({ redirectPath = "/", children }: ProtectRoute) => {
  const [user, setUser] = useState(null);

  if (!user) return <Navigate to={redirectPath} replace />;

  return children;
};

export default ProtectedRoute;
