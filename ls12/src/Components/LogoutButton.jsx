import React, { useState } from "react";
import useAuth from "../Hook/useAuth";

const LogoutButton = () => {
  const { setIsAuth,disconnect } = useAuth();
  const [forceRender, setForceRender] = useState(false);
  return (
    <button
      onClick={() => {
        disconnect()
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
