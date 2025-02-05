import React from "react";
import Conversation from "./Conversation";

const Conversations = () => {
  let conversations = [
    { message: "hi" },
    { message: "hello" },
    { message: "hey" },
  ];
  return (
    <div className="convos scrollbar">
      {conversations.length ? (
        conversations.map((conversation, index) => (
          <Conversation conversation={conversation} key={index} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Conversations;
