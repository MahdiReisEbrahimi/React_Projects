import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Alert from "../UI/Alert";

export default function SimpleForm() {
  const [isInputOk, setIsInputOk] = useState({
    fName: true,
    lName: true,
    alert: false,
  });

  function submitHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (data.fName.trim().length > 1 && data.lName.trim().length > 1) {
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
      if (data.fName.trim().length < 2)
        setIsInputOk((prevData) => ({
          fName: false,
          lName: prevData.lName,
          alert: true,
        }));
      if (data.lName.trim().length < 2)
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
        <Input
          labelText={"First Name"}
          type={"text"}
          id={16}
          name={"fName"}
          isDataOk={isInputOk.fName}
        />
        <Input
          labelText={"Last Name"}
          type={"text"}
          id={15}
          name={"lName"}
          isDataOk={isInputOk.lName}
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
