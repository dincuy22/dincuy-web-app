import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useContext } from "react";

import MyContext from "../../context/MyContext";
import { CheckoutContextProvider } from "../../context/CheckoutContext";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  const { id } = useParams();

  const { dataTelkom, dataAxis, dataIndosat, dataThree, dataXl } = useContext(
    MyContext
  );

  return (
    <CheckoutContextProvider>
      <Layout>
        <CheckoutForm
          data={{
            telkomsel: dataTelkom,
            axis: dataAxis,
            indosat: dataIndosat,
            tri: dataThree,
            xl: dataXl
          }}
          idParam={id}
        />
      </Layout>
    </CheckoutContextProvider>
  );
};

export default Checkout;
