import { createBrowserRouter } from "react-router-dom";
import { CheckoutContextProvider } from "./context/CheckoutContext";
import DataInternet from "./context/DataInternet";
import Checkout from "./pages/Checkout";
import DaftarHarga from "./pages/DaftarHarga";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "checkout/:id",
        element: (
          <DataInternet>
            <CheckoutContextProvider>
              <Checkout />
            </CheckoutContextProvider>
          </DataInternet>
        )
      },
      {
        path: "checkout",
        element: <p>checkout</p>
      },
      {
        path: "daftarharga",
        element: <DaftarHarga />
      },
      {
        path: "about",
        element: <p>about</p>
      }
    ]
  }
]);
