"use client";
import SignUpForm from "@/components/SignInForm";
import ReduxProvider from "@/redux/ReduxProvider";
import React from "react";

const page = () => {
  return (
    <ReduxProvider>
      <div className="mt-32 w-80 m-auto">
        <SignUpForm />
      </div>
    </ReduxProvider>
  );
};

export default page;
