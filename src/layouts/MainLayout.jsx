import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import End from "../components/End";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <End />
    </div>
  );
}

export default MainLayout;
