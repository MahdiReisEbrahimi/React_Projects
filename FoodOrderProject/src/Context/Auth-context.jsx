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

  //==========================================
  const onAddFoods = (id, number) => {
    let existingFoodIndex = -1;
    for (let i = 0; i < chosenFoods.length; i++) {
      if (chosenFoods[i].food.id == id) {
        existingFoodIndex = i;
        break;
      }
    }

    if (existingFoodIndex == -1) {
      for (let i = 0; i < foods.length; i++) {
        if (foods[i].id == id) {
          setChosenFoods((prevFoods) => {
            return [{ food: foods[i], number: number }, ...prevFoods];
          });
          break;
        }
      }
    } else {
      //founded index
      const newChosenFoods = [...chosenFoods];
      newChosenFoods[existingFoodIndex].number = number;
      setChosenFoods(newChosenFoods);
    }
  };
  //==========================================

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
