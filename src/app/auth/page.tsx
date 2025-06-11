"use client";
import AuthLayout from "@/components/auth/auth-layout";
import { FormProvider, useForm } from "react-hook-form";

function AuthPage() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <AuthLayout />
    </FormProvider>
  );
}

export default AuthPage;
