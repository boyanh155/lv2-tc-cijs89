import React, { useState } from "react";
import useAuth from "../Hook/useAuth";

const LoginButton = () => {
  const { setIsAuth,connect } = useAuth();
  const [forceRender, setForceRender] = useState(false);

  return (
    <button
      onClick={() => {
        connect()
        // success
      }}
    >
      Login
    </button>
  );
};

export default LoginButton;
