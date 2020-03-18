import React from "react";
import Settings from "./components/Settings";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Settings enableSetting={() => { console.log('toggling from app') }}/>
    </div>
  );
}

export default App;
