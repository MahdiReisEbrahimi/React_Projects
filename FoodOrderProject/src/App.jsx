import React, { useContext } from "react";
import Header from "./Components/Header";
import Tips from "./Components/Tips";
import Foods from "./Components/AvailableFoods/Foods";
import Cart from "./Components/Cart/Cart";
import AuthContext from "./Context/Auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      {ctx.isCartClicked && <Cart />}
      <div>
        <Header />
        <Tips />
        <Foods />
      </div>
    </React.Fragment>
  );
};

export default App;
