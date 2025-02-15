"use client";

import { useState } from "react";
import CommunityIcon from "../../../../svg/CommunityIcon";
import StoryIcon from "../../../../svg/StoryIcon";
import ChatIcon from "../../../../svg/ChatIcon";
import DotsIcon from "../../../../svg/DotsIcon";
import userIcon from "@/assets/icons/user.svg";
import Menu from "./Menu";
import Image from "next/image";

const SidebarHeader = () => {
  // const { user } = useSelector((state) => state.user);
  const [showMenu, setShowMenu] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  return (
    <>
      {/*Sidebar header*/}
      <div className="h-[50px] dark:bg-dark_bg_2 flex items-center p16">
        {/* container */}
        <div className="w-full flex items-center justify-between">
          <div className="h-[32px] rounded-full bg-[#FFFFFF] aspect-square flex justify-center items-center">
            <Image src={userIcon} alt="userIcon" />
          </div>
          <ul className="flex items-center gap-x-2 5">
            <li>
              <button className="btn">
                <CommunityIcon className="dark:fill-dark_svg_1" />
              </button>
            </li>
            <li>
              <button className="btn">
                <StoryIcon className="dark:fill-dark_svg_1" />
              </button>
            </li>
            <li>
              <button className="btn">
                <ChatIcon className="dark:fill-dark_svg_1" />
              </button>
            </li>
            <li
              className="relative"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <button className={`btn ${showMenu ? "bg-dark_hover_1" : ""}`}>
                <DotsIcon className="dark:fill-dark_svg_1" />
              </button>
              {showMenu ? (
                <Menu setShowCreateGroup={setShowCreateGroup} />
              ) : null}
            </li>
          </ul>
        </div>
      </div>
      {/*Create Group*/}
      {/* {showCreateGroup && (
        <CreateGroup setShowCreateGroup={setShowCreateGroup} />
      )} */}
    </>
  );
};

export default SidebarHeader;
