"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
    const res = await supabase.auth.signInWithPassword(values);
    const user = res.data.user;
    if (user && user.email) {
      dispatch(setUser({ id: parseInt(user.id), email: user.email }));
      router.push("/");
    } else {
      console.log("error");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" variant={"success"}>
          Log In
        </Button>
      </form>
    </Form>
  );
}
