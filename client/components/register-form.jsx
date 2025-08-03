"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

export function RegisterForm({ className, ...props }) {
  // router
  const router = useRouter();

  // login data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // handleChange
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // handleLogin
  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    // login functionality
    // Here...

    try {
      // Step 1: Register with only email/username/password
      const registerRes = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
        {
          username: loginData.email,
          email: loginData.email,
          password: loginData.password,
        }
      );

      // store userid, and jwt
      const { jwt, user } = registerRes.data;

      // update user with firstName, lastName
      axios.put(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/${user.id}`,
        {
          firstName: loginData.firstName,
          lastName: loginData.lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      // Step 3: Login the user
      const res = await signIn("credentials", {
        redirect: false,
        ...loginData,
      });


      if (res?.ok) {
        toast.success("Login Successfully.");
        router.push("/dashboard");
        console.log(res);
      } else {
        toast.error(res?.error || "Login Failed.");
        console.log(res);
      }

    } catch (error) {
      toast.error("Registration failed. Please try again");
    } finally {
      setIsLoading(false);
    }



    // end
    setIsLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Let&apos;s Get Started</h1>
                <p className="text-muted-foreground text-balance">
                  Register your{" "}
                  <span className="font-semibold">TradeHive.</span> account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  onChange={handleChange}
                  name="firstName"
                  value={loginData.firstName}
                  id="firstName"
                  type="text"
                  placeholder="e.g. John"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  onChange={handleChange}
                  name="lastName"
                  value={loginData.lastName}
                  id="lastName"
                  type="text"
                  placeholder="e.g. Doe"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleChange}
                  name="email"
                  value={loginData.email}
                  id="email"
                  type="email"
                  placeholder="m@tradehive.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  onChange={handleChange}
                  name="password"
                  value={loginData.password}
                  type="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                  Login
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            {/* dark:grayscale */}
            <img
              src="/login.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.9]"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
