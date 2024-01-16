import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// !Pages
import Home from "./page/Home";
import About from "./page/About";
import Carts from "./page/Carts";
import Products from "./page/Products";
import SinglePage from "./page/SinglePage";
import RootLayout from "./layout/RootLayout";
import Login from "./page/Login";
import SignUp from "./page/SignUp";

//*Components
import { ProtoctedRoutes } from "./components/ProtoctedRoutes";

//?Redux
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((store) => store.products);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtoctedRoutes user={user}>
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
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to={"/"} /> : <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
