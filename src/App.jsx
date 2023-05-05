import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Login from "./Pages/Login/Login.jsx";
import UserProvider from "./Context/UserContext.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </>
  );
}

export default App;
