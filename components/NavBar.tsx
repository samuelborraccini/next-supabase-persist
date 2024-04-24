"use client";
import React, { useEffect, useState } from "react";
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
import ThemeSwitch from "./ThemeSwitch";
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

  useEffect(() => {
    const supabaseAction = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email && user.id) {
        dispatch(setUser({ email: user.email, id: parseInt(user.id) }));
        console.log(user);
      }
    };
    supabaseAction();
  }, []);
  return (
    <nav className="flex items-center justify-between mb-12">
      <Link href="/" className="flex flex-row justify-start items-center ">
        <Image src={"/images/logo.png"} height={100} width={100} alt="logo" />
        <h1 className="text-4xl  font-bold">Swing</h1>
      </Link>
      <div className="mr-24">
        <NavigationMenu />
      </div>
      <div className="flex space-x-6 items-center justify-center">
        <ThemeSwitch />
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
      </div>
    </nav>
  );
};

export default NavBar;
