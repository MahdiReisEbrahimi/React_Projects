import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

export default function SimpleForm() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  function fNameChangeHandler(data) {
    setFname(data);
  }

  function lNameChangeHandler(data) {
    setLname(data);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("submited!", "First Name : ", fName, " Last Name is : ", lName);
    setFname("");
    setLname("");
  }

  return (
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
      <Button buttonText={"sign in"} type={"submit"} />
    </form>
  );
}
