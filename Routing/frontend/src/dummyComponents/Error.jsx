import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <p>{JSON.parse(error.data).message}</p>
    </>
  );
}
