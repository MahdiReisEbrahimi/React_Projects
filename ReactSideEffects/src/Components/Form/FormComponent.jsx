import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Container from "../UI/Container";
import ErrorModal from "../UI/ErrorModal";
import AuthContext from "../../Context/Auth-Context";

const FormComponent = () => {
  const [userValue, setUserValue] = useState("");
  const [PassValue, setPassValue] = useState("");
  const [error, setError] = useState(false);
  const ctx = useContext(AuthContext);

  const userChangeHandler = (params) => {
    setUserValue(params.target.value);
  };
  const passChangeHandler = (params) => {
    setPassValue(params.target.value);
  };

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

  return (
    <React.Fragment>
      <Container className="m-20">
        <form onSubmit={loginHandler} className="flex flex-col">
          <label htmlFor="emailInput" className="font-bold m-2">
            E-Mail
          </label>
          <input
            onChange={userChangeHandler}
            value={userValue}
            id="emailInput"
            className="bg-blue-200 rounded-2xl p-2"
            type="text"
          />
          <label htmlFor="passwordInput" className="font-bold m-2">
            Password
          </label>
          <input
            onChange={passChangeHandler}
            value={PassValue}
            id="passwordInput"
            type="text"
            className="bg-blue-200 rounded-2xl p-2"
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
