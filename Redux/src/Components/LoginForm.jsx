import { useActionState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store";

export default function LoginForm() {
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  const users = useSelector((state) => state.auth.users);

  const dispatch = useDispatch();

  function loginAction(prevLoginState, formData) {
    const enteredUser = formData.get("user");
    const enteredPass = formData.get("pass");

    const errors = [];

    if (!enteredUser.trim()) errors.push("You missed UserName!");
    if (!enteredPass.trim()) errors.push("You missed Password!");

    if (errors.length > 0)
      return {
        errors,
        enteredValues: { enteredUser, enteredPass },
      };

    let isUserPassOk = false;
    users.forEach((user) => {
      if (user.userName === enteredUser && user.passWord === enteredPass) {
        isUserPassOk = true;
      }
    });

    if (isUserPassOk)
      return {
        errors: null,
        enteredValues: { enteredUser, enteredPass },
        isUserPassOk,
      };
    else {
      errors.push("Wrong UserName or Password!");
      return {
        errors,
        enteredValues: { enteredUser, enteredPass },
      };
    }
  }

  const [formState, formAction] = useActionState(loginAction, {
    errors: null,
  });

  useEffect(() => {
    if (formState.isUserPassOk)
      dispatch(authActions.login(formState?.enteredValues?.enteredUser));
  }, [formState?.isUserPassOk, dispatch]);

  return (
    <form
      action={formAction}
      className="rounded-lg w-1/2 m-auto border-2 border-white p-5 mt-25 flex flex-col items-center"
    >
      <div className="flex flex-col w-full">
        <label htmlFor="user" className="text-white ">
          UserName
        </label>
        <input
          type="text"
          name="user"
          id="user"
          className="w-full mb-3 bg-white rounded-lg p-2 pt-1 pb-1"
          defaultValue={
            formState?.isUserPassOk
              ? ""
              : formState?.enteredValues?.enteredUser || ""
          }
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="pass" className="text-white ">
          Password
        </label>
        <input
          type="text"
          name="pass"
          id="pass"
          className="w-full bg-white rounded-lg p-2 pt-1 pb-1"
          defaultValue={
            formState?.isUserPassOk
              ? ""
              : formState?.enteredValues?.enteredPass || ""
          }
        />
      </div>

      {formState?.errors && (
        <ul className="text-red-500 bg-white p-2 rounded-lg mt-3">
          {formState.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      )}

      <button className="cursor-pointer font-bold hover:bg-blue-300 w-1/2  bg-white rounded-lg p-2 mt-4">
        SUBMIT
      </button>
    </form>
  );
}
