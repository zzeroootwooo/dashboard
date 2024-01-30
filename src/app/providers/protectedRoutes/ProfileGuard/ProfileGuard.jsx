// react
import { Outlet, Navigate } from "react-router";
import { useContext } from "react";
// context
import { ProfileContext } from "../../context/Profile/ProfileContext";
// constants
import { getHomeRoute } from "@/shared/libs/constants/routes";

export const ProfileGuard = () => {
  const { isUserLoggedIn } = useContext(ProfileContext);

  return isUserLoggedIn ? <Outlet /> : <Navigate to={getHomeRoute()} replace />;
};
