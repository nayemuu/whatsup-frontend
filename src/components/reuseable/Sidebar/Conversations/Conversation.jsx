import Image from "next/image";
import userIcon from "@/assets/icons/user.svg";

const Conversation = ({ conversation }) => {
  return (
    <div className="h-[72px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]">
      {/*Container */}
      <div className="relative w-full flex items-center justify-between py-[10px]">
        {/*Left*/}
        <div className="flex items-center gap-x-3">
          {/*Conversation user picture*/}
          <div
            className={`relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden bg-[#FFFFFF]`}
          >
            <Image
              src={userIcon}
              alt="picture"
              className="w-full h-full object-cover "
            />
          </div>

          {/*Conversation name and message*/}
          <div className="w-full flex flex-col">
            {/*Conversation name*/}
            <h1 className="font-bold flex items-center gap-x-2">Nayem</h1>
            {/* Conversation message */}
            <div>
              <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                  {/* <p className="text-green_1">Typing...</p> */}
                  <p>{conversation.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
