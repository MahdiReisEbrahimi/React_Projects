import React, { useState, useEffect } from "react";
import FormComponent from "./Form/FormComponent";
import HeaderTape from "./Header/HeaderTape";
import HomePage from "./Home/HomePage";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const localStorageInfo =
      localStorage.getItem("isLogedIn") === "1" ? true : false;

    if (localStorageInfo) setIsLogedIn(true);
  }, []);

  const logginHandler = (userValue, isLoged) => {
    setUserName(userValue);
    setIsLogedIn(isLoged);

    if (isLoged === true) {
      localStorage.setItem("isLogedIn", "1");
    } else localStorage.setItem("isLogedIn", "0");
  };

  return (
    <div>
      {isLogedIn ? (
        <HomePage userName={userName} />
      ) : (
        <React.Fragment>
          <HeaderTape />
          <FormComponent onLogin={logginHandler} />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
