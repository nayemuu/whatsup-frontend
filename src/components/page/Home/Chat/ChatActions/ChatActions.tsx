"use client";

import { ClipLoader } from "react-spinners";
import Input from "./Input";
import SendIcon from "../../../../../svg/SendIcon";

const ChatActions = () => {
  let loading = false;

  return (
    <form className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none">
      {/*Container*/}
      <div className="w-full flex items-center gap-x-2">
        <Input />
        {/*Send button*/}
        <button type="submit" className="btn">
          {loading ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatActions;
