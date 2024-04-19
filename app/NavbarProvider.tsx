"use client";
import NavBar from "@/components/NavBar";
import ReduxProvider from "@/redux/ReduxProvider";
import React from "react";

const NavbarProvider = () => {
  return (
    <ReduxProvider>
      <NavBar />
    </ReduxProvider>
  );
};

export default NavbarProvider;
