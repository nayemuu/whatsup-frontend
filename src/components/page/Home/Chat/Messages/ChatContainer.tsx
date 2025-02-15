import React from "react";
import Typing from "./Typing";

const ChatMessages = ({ typing }: { typing: boolean }) => {
  return (
    <div className="mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')] bg-cover bg-no-repeat">
      {/*Container*/}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%]">
        <Typing />
      </div>
    </div>
  );
};

export default ChatMessages;
