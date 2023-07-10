import React, { useState } from "react";

const MessageForm = (props) => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     props.onNewMessage(msg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Text Message</h1>
      <textarea
        name=""
        id=""
        cols="50"
        rows="4"
        placeholder="enter your message here"
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      ></textarea>
      <div>
        <input type="submit" value="Send Message" />
      </div>
    </form>
  );
};

export default MessageForm;
