import { useState } from "react";
import Home from "./components/Homepage/index";
import Dashboard from "./components/Dashboard/index";
import LogInSignUp from "./components/LogIn/index";
import Subscription from "./components/Subscription/index";

function App() {
  return (
    <div>
      <Home />
      <Dashboard />
      <LogInSignUp />
      <Subscription />
    </div>
  );
}

export default App;
