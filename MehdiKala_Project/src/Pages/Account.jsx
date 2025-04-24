import { useSelector } from "react-redux";
import Login from "../Components/AccountPage/Login";
import AccountInfo from "../Components/AccountPage/AccountInfo";

export default function Account() {
  const onlineUser = useSelector((state) => state.users.onlineUser);

  return onlineUser ? <AccountInfo onlineUser={onlineUser} /> : <Login />;
}
