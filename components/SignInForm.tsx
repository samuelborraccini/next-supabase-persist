"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/redux/hooks";
import { createClient } from "@/lib/supabase/client";
import { setUser } from "@/redux/slices/mainSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { FaDiscord, FaFacebook } from "react-icons/fa";

import { useEffect, useState } from "react";
const formSchema = z.object({
  email: z.string().email("Must enter a valid email"),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const supabase = createClient();
  const router = useRouter();
  const [hidePassword, setHidePassword] = useState(true);
  const handleGithub = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  const handleDiscord = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await supabase.auth.signInWithPassword(values);
      if (res.error) {
        throw new Error();
      }
      const user = res.data.user;
      if (user && user.email) {
        dispatch(setUser({ id: parseInt(user.id), email: user.email }));
        router.push("/");
      }
    } catch (error) {
      toast.error("Incorrect username or password", {
        position: "bottom-center",
      });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border-[0.5px] p-10 rounded-xl border-gray-300"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div className="flex relative">
                <FormControl>
                  <Input
                    type={hidePassword ? "password" : ""}
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                {hidePassword ? (
                  <FiEye
                    size={30}
                    className="absolute right-4 top-1 cursor-pointer"
                    onClick={() => setHidePassword(!hidePassword)}
                    color="gray"
                  />
                ) : (
                  <FiEyeOff
                    size={30}
                    className="absolute right-4 top-1 cursor-pointer"
                    onClick={() => setHidePassword(!hidePassword)}
                    color="gray"
                  />
                )}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-y-3 flex-col">
          <Button className="w-full" type="submit" variant={"success"}>
            Log In
          </Button>
          <div className="flex justify-center space-x-2">
            <Button type="submit" variant="default" onClick={handleGithub}>
              <IoLogoGithub size={30} />
            </Button>
            <Button type="submit" variant="default" onClick={handleDiscord}>
              <FaDiscord size={30} />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
