import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./Messages/ChatContainer";
import ChatActions from "./ChatActions/ChatActions";

const ChatContainer = () => {
  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden ">
      {/*Container*/}
      <div>
        {/*Chat header*/}
        <ChatHeader />
        <ChatMessages typing={true} />
        <ChatActions />
      </div>
    </div>
  );
};

export default ChatContainer;
