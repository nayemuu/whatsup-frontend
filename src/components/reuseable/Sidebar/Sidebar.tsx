import React from "react";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import Notifications from "./Notifications/Notifications";
import Search from "./Search/Search";

const Sidebar = () => {
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      <SidebarHeader />
      <Notifications />
      <Search />
    </div>
  );
};

export default Sidebar;
