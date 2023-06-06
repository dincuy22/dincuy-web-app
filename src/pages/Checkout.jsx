import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { CheckoutContext } from "../context/CheckoutContext";
import MyContext from "../context/MyContext";

// components
import OrderViaWA from "../components/OrderViaWA";
import InputHarga from "../components/InputHarga";
import InputNomor from "../components/InputNomor";
import Layout from "../components/Layout";
import SelectNominal from "../components/SelectNominal";
import SelectPaketInternet from "../components/SelectPaketInternet";

const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
`;

const Title = styled.h2``;

const Text = styled.p`
  margin-top: -15px;
  margin-bottom: 10px;

  span {
    text-transform: uppercase;
  }
`;

const Checkout = () => {
  const { id } = useParams();
  const { provider, harga } = useContext(CheckoutContext);
  const data = useContext(MyContext);
  console.log(id);

  const CheckPulsa = (
    <>
      <Title>Checkout Pulsa</Title>
      <InputNomor type={id} />
      <Text>
        Provider: <span>{provider || "-"}</span>
      </Text>
      <SelectNominal type="pulsa" />
      <InputHarga />
      <OrderViaWA off={harga ? false : true} />
    </>
  );

  const checkToken = (
    <>
      <Title>Checkout Token PLN</Title>
      <InputNomor type={id} />
      <Text>
        Provider: <span>{provider || "-"}</span>
      </Text>
      <SelectNominal type="pulsa" />
      <InputHarga />
      <OrderViaWA off={harga ? false : true} />
    </>
  );

  const checkPaketInternet = (
    <>
      <Title>Checkout Paket Internet</Title>
      <InputNomor type={id} />
      <Text>
        Provider: <span>{provider || "-"}</span>
      </Text>
      <SelectPaketInternet data={data.dataTelkom} />
      <InputHarga />
      <OrderViaWA off={harga ? false : true} />
    </>
  );

  return (
    <Layout>
      <StyledCheckout>
        {id === "pulsa" && CheckPulsa}
        {id === "paket_internet" && checkPaketInternet}
        {id === "token" && checkToken}
      </StyledCheckout>
    </Layout>
  );
};

export default Checkout;
