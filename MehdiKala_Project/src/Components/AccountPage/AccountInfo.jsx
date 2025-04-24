import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usersActions } from "../../store/users";

export default function AccountInfo({ onlineUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutHandler() {
    dispatch(usersActions.onlineUser(null));
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-svh">
      <div className="flex flex-col items-center w-full  pl-10 pr-10">
        <h2 className="bg-blue-200 mb-1 p-2 rounded-lg w-full text-center">
          نام کاربری : {onlineUser.userName}
        </h2>
        <h2 className="bg-blue-200 mb-1 p-2 rounded-lg w-full text-center">
          شماره تلفن : {onlineUser.phoneNumber}
        </h2>
        <h2 className="bg-blue-200 mb-1 p-2 rounded-lg w-full text-center">
          رمز ورود : {onlineUser.pass}
        </h2>
        <h2 className="bg-blue-200 p-2 mb-1 rounded-lg w-full text-center">
          آیدی : {onlineUser.id}
        </h2>
        <button
          onClick={logoutHandler}
          className="bg-red-500 p-2 text-white text-lg font-bold  cursor-pointer rounded-lg w-full text-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
