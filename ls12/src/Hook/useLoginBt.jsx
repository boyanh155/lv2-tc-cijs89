import React from "react";
import useAuth from "./useAuth";

const useLoginBt = () => {
  const { setIsAuth } = useAuth();

  return (
    <button
      onClick={() => {
        localStorage.setItem("isAuth", "verified");
        setIsAuth('verified')
        // success
      }}
    >
      Login
    </button>
  );
};

const useLogoutBt = () => {
  const { setIsAuth } = useAuth();

  return (
    <button
      onClick={() => {
        // localStorage.setItem("isAuth", "")
        setIsAuth(null)
      }}
    >
      Logout
    </button>
  );
};

export { useLoginBt, useLogoutBt };
