import StateManagedInput from "../UI/StateManagedInput";
import Button from "../UI/Button";
import { useInput } from "../Hooks/useInput";
import {
  isEmail,
  hasMinimumLengthOf,
  isEmpty,
} from "../util/inputValidationFn";

export default function StateFullForm() {
  const {
    value: emailValue,
    InputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: hasEmilError,
    resetHandler: emailResetHandler,
  } = useInput("", (value) => isEmail(value) && hasMinimumLengthOf(2, value));

  const {
    value: nameValue,
    InputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: hasNameError,
    resetHandler: nameResetHandler,
  } = useInput("", (value) => isEmail && hasMinimumLengthOf(2, value));

  function submitHandler(event) {
    event.preventDefault();

    if (
      !hasEmilError &&
      !hasNameError &&
      !isEmpty(nameValue) &&
      !isEmpty(emailValue)
    ) {
      console.log(emailValue + nameValue);
      nameResetHandler();
      emailResetHandler();
    } else {
      if (hasEmilError || isEmpty(emailValue)) emailBlurHandler();
      if (hasNameError || isEmpty(nameValue)) nameBlurHandler();

      return;
    }
  }

  function noMatter() {}

  return (
    <form
      onSubmit={submitHandler}
      className="bg-gray-800 mb-20 mt-20 p-10 text-white flex flex-col"
      noValidate
    >
      <div>
        This one is made with states and includes a lot of more codes but better
        user Experiences...
      </div>
      <StateManagedInput
        onChange={emailChangeHandler}
        hasInputError={hasEmilError && "please enter a valid email"}
        labelText={"Email"}
        id={16}
        onBlur={emailBlurHandler}
        type={"email"}
        value={emailValue}
      />
      <StateManagedInput
        onChange={nameChangeHandler}
        hasInputError={hasNameError && "please enter a valid name"}
        labelText={"Name"}
        id={16}
        onBlur={nameBlurHandler}
        type={"text"}
        value={nameValue}
      />
      <div className="h-5"></div>
      <Button buttonText={"sign in"} type={"submit"} onClick={noMatter} />
    </form>
  );
}
