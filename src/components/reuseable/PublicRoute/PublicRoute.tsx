"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authChecking, setAuthChecking] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      router.replace("/"); // Redirect to home if authenticated
    } else {
      setAuthChecking(false);
    }
  }, []);

  if (authChecking) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <PulseLoader color="#00A884" />
      </div>
    ); // Showing loader while checking auth
  }

  return <>{children}</>;
}
