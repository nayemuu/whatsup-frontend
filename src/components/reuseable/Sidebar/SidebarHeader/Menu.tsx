import React from "react";

// 1. React.Dispatch<React.SetStateAction<number>> is the type for the setState function returned by useState<number>().
// React.SetStateAction<T> represents either the new state (T) or a function that returns the new state.
// 2. React.Dispatch is the function type that takes a SetStateAction and applies it.

const Menu = ({
  setShowCreateGroup,
}: {
  //   setShowCreateGroup: (a: boolean) => void;
  setShowCreateGroup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="absolute right-1 z-50 dark:bg-dark_bg_2 dark:text-dark_text_1 shadow-md w-52">
        <ul>
          <li
            className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3"
            onClick={() => setShowCreateGroup(true)}
          >
            <span>New group</span>
          </li>
          <li className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3">
            <span>New community</span>
          </li>
          <li className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3">
            <span>Starred messaged</span>
          </li>
          <li className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3">
            <span>Settings</span>
          </li>
          <li
            className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3"
            // onClick={() => dispatch(logout())}
          >
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
