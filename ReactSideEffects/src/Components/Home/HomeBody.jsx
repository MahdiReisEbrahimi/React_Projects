import Container from "../UI/Container";
import React, { useContext } from "react";
import AuthContext from "../../Context/Auth-Context";

const HomeBody = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <Container>
      <div className=" flex justify-around mt-20">{`Welcome Back ${ctx.userName}`}</div>
    </Container>
  );
};

export default HomeBody;
