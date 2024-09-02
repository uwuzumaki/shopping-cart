import App from "./App";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shoppage";
import Error from "./Components/Errorpage";
import Navbar from "./Components/Navbar";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Navbar />
        <Error />
      </>
    ),
    children: [
      { path: "/", element: <Homepage /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;
