"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.replace("/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <PulseLoader color="#00A884" />
      </div>
    ); // Showing loader while checking auth
  }

  return <>{children}</>;
}
