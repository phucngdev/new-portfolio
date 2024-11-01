import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

const PublicRoute = () => {
  return (
    <>
      <div className="bg-white dark:bg-black">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default PublicRoute;
