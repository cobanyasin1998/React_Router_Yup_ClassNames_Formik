import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {

  const { user } = useAuth();

  
  if (!user?.isAdmin) {
    return (
      <Navigate
        to="/UnAuth401"
      />
    );
  }

  return children;
}
