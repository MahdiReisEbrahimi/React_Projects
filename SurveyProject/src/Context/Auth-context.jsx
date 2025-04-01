import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLogedIn: false,
    onLogin: () => {},
    onLogout: () => {},
    userName: "",
});

export const AuthContextProvider = (props) => {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const localStorageInfo = localStorage.getItem("isLogedIn") === "1";
        if (localStorageInfo) setIsLogedIn(true);
    }, []);

    const loginHandler = (userValue) => {
        setUserName(userValue);
        setIsLogedIn(true);
        localStorage.setItem("isLogedIn", "1");
    };

    const logoutHandler = () => {
        setIsLogedIn(false);
        localStorage.setItem("isLogedIn", "0");
    };

    return (
        <AuthContext.Provider
            value={{
                isLogedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler,
                userName,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;