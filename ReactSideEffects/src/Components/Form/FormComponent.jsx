import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Container from "../UI/Container";
import ErrorModal from "../UI/ErrorModal";
import AuthContext from "../../Context/Auth-Context";
import Input from "../UI/Input";

const FormComponent = () => {
  const [userValue, setUserValue] = useState("");
  const [PassValue, setPassValue] = useState("");
  const [error, setError] = useState(false);
  const ctx = useContext(AuthContext);

  const loginHandler = (params) => {
    params.preventDefault();
    if (PassValue.trim().length > 7 && userValue.trim().length > 4) {
      setError(false);
      ctx.onLogin(userValue, true);
      setUserValue("");
      setPassValue("");
    } else {
      setError(true);
    }
  };

  const okHandler = (params) => {
    if (params === 1) setError(false);
  };

  const updateUserHandler = (newUser) => {
    setUserValue(newUser);
  };

  const updatePassHandler = (newPass) => {
    setPassValue(newPass);
  };
  return (
    <React.Fragment>
      <Container className="m-20">
        <form onSubmit={loginHandler} className="flex flex-col">
          <label htmlFor="emailInput" className="font-bold m-2">
            E-Mail
          </label>
          <Input
            id={"emailInput"}
            type={"text"}
            updatedValue={updateUserHandler}
            value={userValue}
          />
          <label htmlFor="passwordInput" className="font-bold m-2">
            Password
          </label>
          <Input
            id={"passwordInput"}
            type={"text"}
            updatedValue={updatePassHandler}
            value={PassValue}
          />
          <Button type="submit" text="Login" />
        </form>
      </Container>
      {error && (
        <ErrorModal
          h1="Please correct the input fields!"
          hint="Correct pass has 8 char and correct user has 5 chars."
          clickHandler={okHandler}
        />
      )}
    </React.Fragment>
  );
};

export default FormComponent;
