import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Carts from "./page/Carts";
import Products from "./page/Products";
import SinglePage from "./page/SinglePage";
import RootLayout from "./layout/RootLayout";
import { ProtoctedRoutes } from "./components/ProtoctedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtoctedRoutes user={true}>
          <RootLayout />
        </ProtoctedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Carts />,
        },
        {
          path: "/single",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
