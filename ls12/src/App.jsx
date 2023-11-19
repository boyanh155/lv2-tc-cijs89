import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLogoutBt } from "./Hook/useLoginBt";
import useAuth from "./Hook/useAuth";
import LogoutButton from "./Components/LogoutButton";

function App() {
  const {isAuth} = useAuth()
  console.log(isAuth)
  // const LogoutButton = useLogoutBt();
  return (
    <>
      Hello world
      <LogoutButton/>
    </>
  );
}

export default App;
