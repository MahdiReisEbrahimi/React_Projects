import React, { useState } from "react";

const AuthContext = React.createContext({
  foods: () => {},
  chosenFoods: "",
  isCartClicked: false,
  onSpaceClick: () => {},
});

const foods = [
  {
    name: "Iranian Kebab",
    detail: "maded with fresh meats",
    amount: 123,
    id: 1,
  },
  {
    name: "Iranian Kebab",
    detail: "maded with fresh meats",
    amount: 123,
    id: 2,
  },
  {
    name: "Iranian Kebab",
    detail: "maded with fresh meats",
    amount: 123,
    id: 3,
  },
  {
    name: "Iranian Kebab",
    detail: "maded with fresh meats",
    amount: 123,
    id: 4,
  },
];

export const AuthContextProvider = (props) => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const onCartClick = () => {
    setIsCartClicked(true);
  };

  const onSpaceClick = () => {
    setIsCartClicked(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isCartClicked: isCartClicked,
        onSpaceClick: onSpaceClick,
        onCartClick: onCartClick,
        foods: foods,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
