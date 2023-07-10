import React, { useState } from "react";
import Btn from "./Btn";
import Content from "./Content";

const Tabs = () => {
  const [tab, setTab] = useState(["tab1", "tab2", "tab3"]);

  return (
    <>
      {tab.map((text, index) => (
        <Btn text={text} key={index} id={index} />
        
      ))}
    </>
    
  );
  
};

export default Tabs;
