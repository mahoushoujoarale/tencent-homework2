import React from "react";
import "./App.less";

import ShowPane from "./components/showpane";
import EditPane from "./components/editpane";
import Message from "./components/message";

function App() {
  return (
    <div className="App">
      <Message str="即将展示结果" />
      <div className="main">
        <EditPane />
        <ShowPane />
      </div>
    </div>
  );
}

export default App;
