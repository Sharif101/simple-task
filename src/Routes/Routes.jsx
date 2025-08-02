import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import DashLayout from "../Layout/DashLayout ";
import Dashboard from "../Components/Dashboard/Dashboard";
import Blog from "../Components/Blog/Blog";
import DragAndDrop from "../Components/DragAndDrop/DragAndDrop";
import DragImage from "../Components/DragImage/DragImage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/drag&drop",
        element: <DragAndDrop />,
      },
      {
        path: "/drag&drop&image",
        element: <DragImage />,
      },

      {
        path: "/dashboard",
        element: <DashLayout />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
    ],
  },
]);

export default router;
