import Sidebar from "@/components/reuseable/Sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
        {/*container*/}
        <div className="container h-screen flex py-[19px]">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
