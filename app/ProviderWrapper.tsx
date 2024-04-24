"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import ReduxProvider from "@/redux/ReduxProvider";
const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default ProviderWrapper;
