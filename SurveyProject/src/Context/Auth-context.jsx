import { filter, title } from "framer-motion/client";
import React, { useState, useEffect } from "react";

const letters = [
  {
    name: "Ali",
    title: "Services",
    text: "Hello. i need to say that i need to say that i need to say that i need to say that i need to say that i need to say that ",
    score: 5,
    id: 10,
  },
  {
    name: "Reza",
    title: "Services",
    text: "Hello. i need to say that i need to say that i need to say that i need to say that i need to say that i need to say that ",
    score: 2,
    id: 12,
  },
];

const AuthContext = React.createContext({
  letters: letters,
  dataSubmitHandler: () => {},
  agreeClickHandler: () => {},
  disAgreeClickHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [opinions, setOpinion] = useState(letters);

  function dataSubmitHandler(data) {
    setOpinion((prevOpinions) => [data, ...prevOpinions]);
  }

  async function agreeClickHandler(id) {
    const changedOpinion = opinions.map((opinion) =>
      opinion.id === id ? { ...opinion, score: opinion.score + 1 } : opinion
    );
    setOpinion(changedOpinion);
  }

  async function disAgreeClickHandler(id) {
    const changedOpinion = opinions.map((opinion) =>
      opinion.id === id ? { ...opinion, score: opinion.score - 1 } : opinion
    );
    setOpinion(changedOpinion);
  }

  return (
    <AuthContext.Provider
      value={{
        letters: opinions,
        dataSubmitHandler: dataSubmitHandler,
        agreeClickHandler: agreeClickHandler,
        disAgreeClickHandler: disAgreeClickHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
