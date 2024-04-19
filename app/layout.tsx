import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ReduxProvider from "@/redux/ReduxProvider";
import NavbarProvider from "./NavbarProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
const inter = Inter({ subsets: ["latin"] });
let persistor = persistStore(store);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className dark px-6 py-6`}>
        <NavbarProvider />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
