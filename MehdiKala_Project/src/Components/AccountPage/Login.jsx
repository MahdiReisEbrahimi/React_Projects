import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersActions } from "../../store/users";

export default function Login() {
  const [enteredPhone, setEnteredPhone] = useState(false);
  const [isuserLogedInBefore, setIsuserLogedInBefore] = useState(false);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);

  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  function phoneNumberLoginHandler() {
    console.log(phoneNumberRef.current.value);
    if (phoneNumberRef.current.value.length !== 11) {
      setHasError(true);
      return;
    }
    const lastUser = users.filter(
      (user) => user.phoneNumber === phoneNumberRef.current.value
    );
    if (lastUser.length !== 0) {
      setIsuserLogedInBefore(true);
    }
    setEnteredPhone(phoneNumberRef.current.value);
    setHasError(false);
  }

  function passwordLoginHandler() {
    if (isuserLogedInBefore) {
      const user = users.find(
        (user) =>
          user.phoneNumber === enteredPhone &&
          user.pass === passwordRef.current.value
      );

      if (user) {
        dispatch(usersActions.onlineUser(user));
        navigate("/account");
      } else {
        setHasError(true);
      }
    } else {
      dispatch(
        usersActions.signup({
          userName: "x",
          phoneNumber: enteredPhone,
          pass: passwordRef.current.value,
          id: "nx",
        })
      );
      navigate("/account");
    }
  }
  return (
    <div className="pb-30 flex flex-col w-full h-svh justify-center items-center">
      <img
        src="https://www.shutterstock.com/image-vector/lions-head-full-color-600nw-1432918391.jpg"
        alt="logo"
        className="w-1/2 mb-5"
      />
      {!enteredPhone ? (
        <div className="flex flex-col mt-4 w-full pl-8 pr-8">
          <h2 className="font-bold mb-3 mr-1">ورود | ثبت نام</h2>
          <p className="text-sm mr-1 mb-3 font-bold">سلام</p>
          <label htmlFor="phone_number" className="mb-3 text-sm mr-2">
            لطفا شماره موبایل خود را وارد کنید
          </label>
          <input
            className={`text-center w-full mb-1 bg-blue-100 border-b-2 ${
              hasError && "border-red-900"
            } p-2 rounded-lg`}
            type="number"
            step={1}
            id="phone_number"
            ref={phoneNumberRef}
          />
          {hasError && (
            <p className="text-sm mb-1 text-red-900 font-bold">
              لطفا شماره موبایل خود را به درستی وارد کنید.
            </p>
          )}
          <button
            onClick={phoneNumberLoginHandler}
            className="text-center cursor-pointer w-full mb-1 bg-blue-300 p-2 rounded-lg"
          >
            ورود
          </button>
        </div>
      ) : (
        <div className="flex flex-col mt-4 w-full pl-8 pr-8">
          <h2 className="font-bold mb-3 mr-1">
            {isuserLogedInBefore ? "ورود" : "ثبت نام"}
          </h2>
          <label htmlFor="phone_number" className="mb-3 text-sm mr-2">
            {isuserLogedInBefore
              ? "لطفا رمز خود را وارد کنید"
              : "رمز اکانت خود را تنظیم کنید. ( رمز صحیح شامل اعداد و حروف انگلیسی به همراه یکی از علامت های '!@#$%&*' است.  )"}
          </label>
          <input
            className={`text-center w-full mb-1 bg-blue-100 border-b-2 ${
              hasError && "border-red-900"
            } p-2 rounded-lg`}
            type="text"
            id="phone_number"
            ref={passwordRef}
          />
          {hasError && (
            <p className="text-sm mb-1 text-red-900 font-bold">
              پسورد نادرست است.
            </p>
          )}
          <button
            onClick={passwordLoginHandler}
            className="text-center cursor-pointer w-full mb-1 bg-blue-300 p-2 rounded-lg"
          >
            {isuserLogedInBefore ? "ورود" : "ثبت نام"}
          </button>
        </div>
      )}
    </div>
  );
}
