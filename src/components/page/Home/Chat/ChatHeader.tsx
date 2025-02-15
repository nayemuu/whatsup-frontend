"use client";

import Image from "next/image";
import CallIcon from "../../../../svg/CallIcon";
import DotsIcon from "../../../../svg/DotsIcon";
import SearchLargeIcon from "../../../../svg/SearchLargeIcon";
import VideoCallIcon from "../../../../svg/VideoCallIcon";
import userIcon from "@/assets/icons/user.svg";

const ChatHeader = () => {
  const callUser = () => {
    //
  };

  return (
    <div className="h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none">
      {/*Container*/}
      <div className="w-full flex items-center justify-between">
        {/*left*/}
        <div className="flex items-center gap-x-4">
          {/*Conversation image*/}
          <button className="btn">
            <div className="w-full h-full rounded-full bg-[#FFFFFF] aspect-square flex justify-center items-center">
              <Image src={userIcon} alt="userIcon" />
            </div>
            {/* <img
                src={
                  activeConversation.isGroup
                    ? activeConversation.picture
                    : getConversationPicture(user, activeConversation.users)
                }
                alt=""
                className="w-full h-full rounded-full object-cover"
              /> */}
          </button>
          {/*Conversation name and online status*/}
          <div className="flex flex-col">
            <h1 className="dark:text-white text-md font-bold">Nayem</h1>
            <span className="text-xs dark:text-dark_svg_2">
              {true ? "online" : ""}
            </span>
          </div>
        </div>
        {/*Right*/}
        <ul className="flex items-center gap-x-2.5">
          {1 == 1 ? (
            <li onClick={() => callUser()}>
              <button className="btn">
                <VideoCallIcon />
              </button>
            </li>
          ) : null}
          {1 == 1 ? (
            <li>
              <button className="btn">
                <CallIcon className="" />
              </button>
            </li>
          ) : null}
          <li>
            <button className="btn">
              <SearchLargeIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <DotsIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatHeader;
