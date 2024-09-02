import App from "./App";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shoppage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;
