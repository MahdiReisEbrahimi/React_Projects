import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Alert from "../UI/Alert";

export default function SimpleForm() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [check, setCheck] = useState(false);

  function fNameChangeHandler(data) {
    setFname(data);
  }

  function lNameChangeHandler(data) {
    setLname(data);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (fName.length > 2 && lName.length > 2)
      console.log(
        "submited!",
        "First Name : ",
        fName,
        " Last Name is : ",
        lName
      );
    else {
      setCheck(true);
      return;
    }

    setFname("");
    setLname("");
  }

  function confirmHandler() {
    setCheck(false);
  }

  function noMatter() {}

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 mb-20 mt-20 p-10 text-white flex flex-col"
      >
        <Input
          parentvalue={fName}
          labelText={"First Name"}
          type={"text"}
          id={16}
          onChangeValue={fNameChangeHandler}
        />
        <Input
          parentvalue={lName}
          labelText={"Last Name"}
          type={"text"}
          id={15}
          onChangeValue={lNameChangeHandler}
        />
        <Button buttonText={"sign in"} type={"submit"} onClick={noMatter} />
      </form>
      {check && (
        <Alert
          alertMessage={"Fname and Lname must contain minimum of 2 characters."}
          onConfirm={confirmHandler}
          ConfirmButtonMessage={"   --ok--   "}
        />
      )}
    </>
  );
}
