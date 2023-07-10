import "./App.css";
import MessageForm from "./component/MessageForm";
import MessageDisplay from "./component/MessageDisplay";
import React, { useState } from "react";

function App() {
  const [currentMsg, setCurrentMsg] = useState("there are no messages");
  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  };
  return (
    <div className="App">
      <MessageForm onNewMessage={youveGotMail} />
      <MessageDisplay message={currentMsg} />
    </div>
  );
}

export default App;
