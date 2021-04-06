import React, { useState } from "react";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Screens from "./components/Screens/Screens";
import Header from "./components/Header/Header";
import { useEagerConnect, useInactiveListener } from "./eth/web3hooks";
import "./App.css";

export const NavContext = React.createContext<any>([]);

function App() {
  const navigation = useState("farming");
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return (
    <NavContext.Provider value={navigation}>
      <div className="container">
        <Header />
        <Sidemenu />
        <Screens />
      </div>
    </NavContext.Provider>
  );
}

export default App;
