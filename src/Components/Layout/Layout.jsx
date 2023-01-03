import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Announcement } from "../Announcement/Announcement";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
