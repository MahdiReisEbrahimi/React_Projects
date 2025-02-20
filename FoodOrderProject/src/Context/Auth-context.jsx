import React from "react";

const AuthContext = React.createContext({
  //snippet things
});

export const AuthContextProvider = (props) => {
  return (
    <AuthContextProvider
      value={{
        isLogedin: false,
      }}
    >
      {props.children}
    </AuthContextProvider>
  );
};

export default AuthContext;
