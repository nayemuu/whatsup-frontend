"use client";

import AuthInput from "@/components/reuseable/Inputs/AuthInput/AuthInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useRouter } from "next/navigation";

type APIError = {
  status: number;
  data?: {
    message?: string;
  };
};

const LoginForm = () => {
  const [login, { isLoading, isError, isSuccess, data, error }] =
    useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      // console.log("data = ", data);
      // console.log("access Token = ", data.token.accessToken);
      router.push("/");
    }
  }, [isSuccess]);

  const clearFrom = () => {
    setEmail("");
    setPassword("");
  };

  // useEffect(() => {
  //   if (isError) {
  //     console.log("error = ", error);
  //   }
  // }, [isError]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim().length && password.trim().length) {
      // console.log("email = ", email.trim());
      // console.log("password = ", password.trim());
      login({ email: email.trim(), password: password.trim() });
    } else {
      console.error("Email or password is missing.");
    }
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
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <AuthInput
            value={email}
            setValue={setEmail}
            type="text"
            placeholder="Email address"
            required
          />
          <AuthInput
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Password"
          />

          {/*if we have an error*/}
          {error && (
            <div>
              <p className="text-red-400">
                {(error as APIError)?.data?.message || "Something Went Wrong"}
              </p>
            </div>
          )}

          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide
          font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300
          "
            type="submit"
          >
            {isLoading ? <PulseLoader color="#fff" size={16} /> : "Sign in"}
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
