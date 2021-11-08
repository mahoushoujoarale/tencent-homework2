import React from "react";
import "./App.less";

import ShowPane from "./components/showpane";
import EditPane from "./components/editpane";

function App() {
  return (
    <div className="App">
      <EditPane />
      <ShowPane />
    </div>
  );
}

export default App;
