import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useContext } from "react";
import AuthContex from "../../Context/Auth-context";
import { useActionState } from "react";

export default function SurveyForm() {
  const ctx = useContext(AuthContex);

  function submitAction(prevFormState, formData) {
    const enteredName = formData.get("name");
    const enteredTitle = formData.get("title");
    const enteredText = formData.get("text");

    const errors = [];
    if (!Boolean(enteredName.match(/^[A-Za-z]*$/)))
      errors.push("name must have English letters only");
    if (enteredText.trim().length < 10)
      errors.push("Correct text has at least 10 characters.");
    if (enteredTitle?.trim().length < 4)
      errors.push("Title must have 4 characters.");

    if (errors.length > 0)
      return {
        errors: errors,
        enteredValues: {
          name: enteredName,
          title: enteredTitle,
          text: enteredText,
        },
      };

    ctx.dataSubmitHandler({
      name: enteredName
        .split("")
        .map((char, index) => (index === 0 ? char.toUpperCase() : char))
        .join(""),
      title: enteredTitle
        .split("")
        .map((char, index) => (index === 0 ? char.toUpperCase() : char))
        .join(""),
      text: enteredText
        .split("")
        .map((char, index) => (index === 0 ? char.toUpperCase() : char))
        .join(""),
      id: Math.random() * 1000,
      score: 0,
    });

    return { errors: null };
  }

  const [formState, formAction] = useActionState(submitAction, {
    errors: null,
    enteredValues: {
      name: "",
      title: "",
      text: "",
    },
  });

  return (
    <div className="bg-pink-600 m-5 p-5 ">
      <form action={formAction}>
        <h2 className="text-[clamp(1rem,3.5vw,2rem)] text-black mb-3">
          Share Your Opinion With us
        </h2>
        <div className="w-full sm:flex sm:justify-around">
          <Input
            labelText="Name"
            id="name"
            name="name"
            type="text"
            defaultValue={formState.enteredValues?.name}
          />
          <Input
            labelText={"Title"}
            id="title"
            name="title"
            type="text"
            defaultValue={formState.enteredValues?.title}
          />
        </div>
        <div className="sm:w-67/72 sm:flex sm:flex-col sm:m-auto">
          <div className="flex flex-col w-full sm:mb-4">
            <Input
              labelText={"Your Opinion"}
              id="text"
              name="text"
              type="text"
              defaultValue={formState.enteredValues?.text}
              moreStyles="h-15 items-start align-top"
            />
          </div>
          <div className="sm:flex sm:justify-end">
            <Button text={"Submit"} type="submit" />
          </div>
          {formState.errors != null && (
            <div className=" mt-4 text-sm text-white font-bold">
              <ul>
                {formState.errors.map((error) => {
                  return <li key={Math.random() * 1000}>* {error}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
