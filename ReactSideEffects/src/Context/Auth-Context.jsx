import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLogedIn: false,
  userName: "",
  setUserName: () => {},
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const localStorageInfo =
      localStorage.getItem("isLogedIn") === "1" ? true : false;

    if (localStorageInfo) setIsLogedIn(true);
  }, []);

  const loginHandler = (userValue, isLoged) => {
    console.log(isLoged);
    setUserName(userValue);
    setIsLogedIn(isLoged);

    if (isLoged === true) {
      localStorage.setItem("isLogedIn", "1");
    } else localStorage.setItem("isLogedIn", "0");
  };

  const logoutHandler = () => {
    setIsLogedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogedIn: isLogedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        userName: userName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
