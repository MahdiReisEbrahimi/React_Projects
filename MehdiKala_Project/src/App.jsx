import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <ProductsPage /> },
        { path: "cart", element: <Cart /> },
        { path: "account", element: <Account /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
