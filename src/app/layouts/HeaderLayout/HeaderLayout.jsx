// react
import { Outlet } from "react-router";
// ui
import { Header } from "@/widgets/Header";

export const HeaderLayout = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
