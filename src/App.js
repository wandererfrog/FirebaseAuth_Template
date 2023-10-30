import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import UserContext from './context/userContext';
import useAuthListener from './hooks/authListener';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Reset",
    element: <Reset />,
  },
]);


function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
