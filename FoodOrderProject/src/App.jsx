import React from "react";
import Header from "./Components/Header";
import Tips from "./Components/Tips";
import Foods from "./Components/Foods";

const foods = [
  { name: "Iranian Kebab", detail: "maded with fresh meats", amount: 123 },
  { name: "Iranian Kebab", detail: "maded with fresh meats", amount: 123 },
  { name: "Iranian Kebab", detail: "maded with fresh meats", amount: 123 },
  { name: "Iranian Kebab", detail: "maded with fresh meats", amount: 123 },
  { name: "Iranian Kebab", detail: "maded with fresh meats", amount: 123 },
];

const App = () => {
  return (
    <div>
      <Header />
      <Tips />
      <Foods foods={foods} />
    </div>
  );
};

export default App;
