import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, [setIsAuth]);
  const disconnect = () => {
    setIsAuth('')
  };
  const connect = () => {
    setIsAuth('verified')
  };
  useEffect(() => {
    if (isAuth === "verified") {
      setUser(localStorage.getItem("user"));
    }
  }, [isAuth]);

  return { isAuth, user, setIsAuth,connect,disconnect };
};

export default useAuth;
