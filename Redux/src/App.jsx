import Header from "./Components/Header";
import LoginForm from "./Components/LoginForm";
import ReduxCounter from "./Components/ReduxCounter";
import Profile from "./Components/UserProfile";
import { useSelector } from "react-redux";

export default function App() {
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  return (
    <div className="h-full">
      <Header />
      {!isLogedIn ? <LoginForm /> : <Profile />}
      <ReduxCounter />
    </div>
  );
}
