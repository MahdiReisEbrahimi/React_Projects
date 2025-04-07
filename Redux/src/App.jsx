import Header from "./Components/Header";
import LoginForm from "./Components/LoginForm";
import ReduxCounter from "./Components/ReduxCounter";
import Profile from "./Components/UserProfile";

export default function App() {
  return (
    <div className="h-full">
      <Header />
      {true ? <LoginForm /> : <Profile />}
      <ReduxCounter />
    </div>
  );
}
