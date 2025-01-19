"use client";

import AuthInput from "@/components/reuseable/Inputs/AuthInput/AuthInput";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  const formAction = async (formData: FormData) => {
    // console.log(formData.get("name"));
    console.log(Object.fromEntries(formData));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/*Heading*/}
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-sm">Sign up</p>
        </div>
        {/*Form*/}
        <form action={formAction} className="mt-6 space-y-6">
          <AuthInput name="name" type="text" placeholder="Full Name" required />
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            required
          />

          <AuthInput name="password" type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
