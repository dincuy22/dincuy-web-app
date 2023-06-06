import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutContextProvider = ({ children }) => {
  const [provider, setProvider] = useState("");
  const [rincianChekout, setRincianChekout] = useState("");

  const [harga, setHarga] = useState("");

  return (
    <CheckoutContext.Provider
      value={{
        provider,
        setProvider,
        rincianChekout,
        setRincianChekout,
        harga,
        setHarga
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
