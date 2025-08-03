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

export function RegisterForm({ className, ...props }) {
  // router
  const router = useRouter();

  // login data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    username: "",
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
                <Label htmlFor="username">Username</Label>
                <Input
                  onChange={handleChange}
                  name="text"
                  value={loginData.username}
                  id="text"
                  type="text"
                  placeholder="johndoe45"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">FirstName</Label>
                <Input
                  onChange={handleChange}
                  name="text"
                  value={loginData.firstName}
                  id="text"
                  type="text"
                  placeholder="john"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">LastName</Label>
                <Input
                  onChange={handleChange}
                  name="text"
                  value={loginData.lastName}
                  id="text"
                  type="text"
                  placeholder="doe"
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
                  Sign in
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
