import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import ProviderWrapper from "./ProviderWrapper";
const inter = Inter({ subsets: ["latin"] });
let persistor = persistStore(store);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black px-6 py-6`}>
        <ProviderWrapper>
          <NavBar />
          {children}
        </ProviderWrapper>
        <ToastContainer />
      </body>
    </html>
  );
}
