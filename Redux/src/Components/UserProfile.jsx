import { useSelector } from "react-redux";
export default function Profile() {
  const userName = useSelector((state) => state.auth.onlineUserName);
  return (
    <div className="text-white rounded-lg w-1/2 m-auto border-2 border-white p-5 mt-25 flex flex-col items-center">
      Hello {userName}
    </div>
  );
}
