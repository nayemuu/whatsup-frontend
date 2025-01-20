"use client";

import AuthInput from "@/components/reuseable/Inputs/AuthInput/AuthInput";
import Link from "next/link";
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const LoginForm = () => {
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
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            required
          />
          <AuthInput name="password" type="password" placeholder="Password" />

          {/*if we have an error*/}
          {/* {error ? (
            <div>
              <p className="text-red-400">{error}</p>
            </div>
          ) : null} */}
          {/*Submit button*/}
          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide
          font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300
          "
            type="submit"
          >
            {0 ? <PulseLoader color="#fff" size={16} /> : "Sign in"}
          </button>

          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span>you do not have an account ?</span>
            <Link
              href="/register"
              className=" hover:underline cursor-pointer transition ease-in duration-300"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
