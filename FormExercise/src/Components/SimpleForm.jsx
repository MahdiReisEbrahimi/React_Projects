import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Alert from "../UI/Alert";
import { hasMinimumLengthOf } from "../util/inputValidationFn";

export default function SimpleForm() {
  const [isInputOk, setIsInputOk] = useState({
    fName: true,
    lName: true,
    alert: false,
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target);
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (
      hasMinimumLengthOf(2, data.fName) &&
      hasMinimumLengthOf(2, data.lName)
    ) {
      console.log(
        "submited!",
        "First Name : ",
        data.fName,
        " Last Name is : ",
        data.lName
      );
      setIsInputOk({
        fName: true,
        lName: true,
        alert: false,
      });
      event.target.reset();
    } else {
      if (!hasMinimumLengthOf(2, data.fName))
        setIsInputOk((prevData) => ({
          fName: false,
          lName: prevData.lName,
          alert: true,
        }));
      if (!hasMinimumLengthOf(2, data.lName))
        setIsInputOk((prevData) => ({
          fName: prevData.fName,
          lName: false,
          alert: true,
        }));
      return;
    }
  }

  function confirmHandler() {
    setIsInputOk((prevData) => ({
      fName: prevData.fName,
      lName: prevData.lName,
      alert: false,
    }));
  }

  function noMatter() {}

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 mb-20 mt-20 p-10 text-white flex flex-col"
      >
        <div>This one is made with browser APIs and easier things.</div>
        <Input
          labelText={"First Name"}
          id={16}
          isDataOk={isInputOk.fName}
          name={"fName"}
          type={"text"}
        />
        <Input
          labelText={"Last Name"}
          id={15}
          isDataOk={isInputOk.lName}
          name={"lName"}
          type={"text"}
        />
        <div className="h-5"></div>
        <Button buttonText={"sign in"} type={"submit"} onClick={noMatter} />
      </form>
      {isInputOk.alert && (
        <Alert
          alertMessage={"Fname and Lname must contain minimum of 2 characters."}
          onConfirm={confirmHandler}
          ConfirmButtonMessage={"   --ok--   "}
        />
      )}
    </>
  );
}
