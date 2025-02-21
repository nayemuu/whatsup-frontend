"use client";
import { PulseLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <PulseLoader color="#00A884" />
    </div>
  );
};

export default loading;
