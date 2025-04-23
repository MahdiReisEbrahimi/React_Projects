import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { index: "products", element: <ProductsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
