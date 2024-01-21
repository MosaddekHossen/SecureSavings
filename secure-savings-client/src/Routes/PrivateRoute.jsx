import { useContext } from "react";

import { Navigate } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import { AuthContext } from "../Authentication/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
