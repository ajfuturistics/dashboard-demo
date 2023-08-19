import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./components/Layouts/RootLayout";
import Home from "./pages/Home/Home";
import Charts from "./pages/Charts/Charts";
import Contact from "./pages/Contact/Contact";
import AddContact from "./pages/AddContact/AddContact";
import UpdateContact from "./pages/UpdateContact/UpdateContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Contact />,
          },
          {
            path: "/contact/add",
            element: <AddContact />,
          },
          {
            path: "/contact/:id",
            element: <UpdateContact />,
          },
        ],
      },
      {
        path: "/chart-and-maps",
        element: <Charts />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
