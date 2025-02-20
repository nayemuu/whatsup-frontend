import Sidebar from "@/components/reuseable/Sidebar/Sidebar";
import WhatsappHome from "@/components/page/Home/Home";
import Image from "next/image";
import ChatContainer from "@/components/page/Home/Chat/ChatContainer";

export default function Home() {
  return (
    <>
      <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
        {/*container*/}
        <div className="container h-screen flex py-[19px]">
          <Sidebar />
          {/* <WhatsappHome /> */}
          <ChatContainer />
        </div>
      </div>
    </>
  );
}
