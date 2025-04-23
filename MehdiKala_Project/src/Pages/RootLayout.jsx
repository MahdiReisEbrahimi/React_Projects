import MainNavigator from "../Components/MainNavigator";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <MainNavigator />
      <Outlet />
    </>
  );
}
