import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import LoginForm from "./Components/LoginForm";
import ReduxCounter from "./Components/ReduxCounter";
import Profile from "./Components/UserProfile";
import { useSelector } from "react-redux";
import RootLayout from "./Components/RootLayout";
import Products from "./Components/Products";
import HomePage from "./Components/HomePage";
import ProductDetail from "./Components/ProductDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/counter",
          element: <ReduxCounter />,
        },
        { path: "/product", element: <Products /> },
        { path: "/product/:productId", element: <ProductDetail /> },
      ],
    },
  ]);

  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  return (
    <div className="h-full">
      <RouterProvider router={router} />
      {/* <Header />
      {!isLogedIn ? <LoginForm /> : <Profile />}
      <ReduxCounter /> */}
    </div>
  );
}
