import React, { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { useLoginBt } from "../../Hook/useLoginBt";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const AuthWrapper = ({ children }) => {
  // const [checkAuth, setCheckAuth] = useState(null);
  const { isAuth } = useAuth();
  console.log(isAuth);
  if (!isAuth) {
    return (
      <h1>
        Login page
        <LoginButton />
        <LogoutButton />
      </h1>
    );
  }

  return children;
};

export default AuthWrapper;
