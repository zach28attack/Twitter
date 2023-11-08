import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./components/shared/ErrorPage";
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
