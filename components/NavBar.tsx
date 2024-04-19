"use client";
import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AlertPortal from "./AlertPortal";
import { toast } from "react-toastify";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { clearUser, setUser } from "@/redux/slices/mainSlice";
const NavBar = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const supabase = createClient();
  const router = useRouter();
  const handleLogout = async () => {
    toast.success("Successfully loged out.", { position: "bottom-center" });
    await supabase.auth.signOut();
    dispatch(clearUser());
    router.push("/");
  };
  return (
    <nav className="flex items-center justify-between mb-12">
      <div className="flex flex-row justify-start items-center space-x-4 ">
        <Image
          className="animate-bounce"
          src={"/images/frog.png"}
          height={30}
          width={30}
          alt="logo"
        />
        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700 font-bold">
          Frogs <span className="text-white">.</span>
        </h1>
      </div>
      <div className="mr-24">
        <NavigationMenu />
      </div>
      {user?.email ? (
        <Popover>
          <PopoverTrigger>{user.email}</PopoverTrigger>
          <PopoverContent className="flex justify-center">
            <Button variant="destructive" onClick={handleLogout}>
              Log Out
            </Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      )}
    </nav>
  );
};

export default NavBar;
