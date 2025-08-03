"use client";

import Loading from "@/components/Loading";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegisterPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/dashboard");
    }
  }, [status]);

  if (status === "loading") {
    <Loading standardLoader={true} />;
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  );
}
