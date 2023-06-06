import { RouterProvider } from "react-router-dom";
import DataInternet from "./context/DataInternet";
import { router } from "./routes";

import "./styles.scss";

export default function App() {
  return <RouterProvider router={router} />;
}
