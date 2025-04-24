import MainNavigator from "../Components/MainNavigator";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="min-h-screen pb-[6rem]">
      <Outlet />
      <MainNavigator />
    </div>
  );
}
