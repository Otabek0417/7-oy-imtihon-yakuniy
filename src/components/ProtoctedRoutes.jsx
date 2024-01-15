import { Navigate } from "react-router-dom";

export function ProtoctedRoutes({ user, children }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
