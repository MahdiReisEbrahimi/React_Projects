import React, { useState, useEffect, useContext } from "react";
import FormComponent from "./Components/Form/FormComponent";
import HeaderTape from "./Components/Header/HeaderTape";
import HomePage from "./Components/Home/HomePage";
import AuthContext from "./Context/Auth-Context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div>
      {ctx.isLogedIn ? (
        <HomePage />
      ) : (
        <React.Fragment>
          <HeaderTape />
          <FormComponent />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
