import React, { useState } from "react";

const AuthContext = React.createContext({
  foods: () => {},
  chosenFoods: "",
  isCartClicked: false,
  onSpaceClick: () => {},
  onAddFoods: () => {},
});

const foods = [
  {
    name: "کباب تهرون",
    detail: "maded with fresh meats",
    amount: 19,
    id: 1,
  },
  {
    name: "قرمه سبزی",
    detail: "maded with fresh meats",
    amount: 17,
    id: 2,
  },
  {
    name: "قیمه",
    detail: "maded with fresh meats",
    amount: 12,
    id: 3,
  },
  {
    name: "ویژویژک",
    detail: "maded with fresh meats",
    amount: 18,
    id: 4,
  },
];

export const AuthContextProvider = (props) => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [chosenFoods, setChosenFoods] = useState([]);

  const onCartClick = () => {
    setIsCartClicked(true);
  };

  const onSpaceClick = () => {
    setIsCartClicked(false);
  };

  const onAddFoods = (id, number) => {
    setChosenFoods((prevFoods) => {
      const existingFoodIndex = prevFoods.findIndex((food) => food.id === id);

      if (existingFoodIndex !== -1) {
        const updatedFoods = [...prevFoods];
        updatedFoods[existingFoodIndex] = {
          ...updatedFoods[existingFoodIndex],
          number: updatedFoods[existingFoodIndex].number + number,
        };
        return updatedFoods;
      } else {
        const food = foods.find((x) => x.id === id);
        if (!food) return prevFoods;

        return [...prevFoods, { ...food, number }];
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isCartClicked: isCartClicked,
        onSpaceClick: onSpaceClick,
        onCartClick: onCartClick,
        foods: foods,
        onAddFoods: onAddFoods,
        chosenFoods: chosenFoods,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
