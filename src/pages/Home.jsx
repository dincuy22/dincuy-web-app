import styled from "styled-components";

import Layout from "../components/Layout";
import Product from "../components/Product";

const StyledHome = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  hr {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Home = () => {
  const productDigital = [
    {
      name: "Pulsa",
      desc: "Pulsa mulai dari Rp. 5000",
      link: "pulsa",
      tersedia: true
    },
    {
      name: "Paket Internet",
      desc: "Harga paket internet mulai Rp. 10.000",
      link: "paket_internet",
      tersedia: true
    },
    {
      name: "Token",
      desc: "Token mulai Rp. 20.000",
      link: "token",
      tersedia: true
    }
  ];

  const layananDigital = [
    {
      name: "Top Up Dompet Digital",
      desc: "Top up mulai dari Rp. 10.000",
      link: "topup",
      tersedia: false
    },
    {
      name: "Transfer Ke Semua Bank",
      desc: "Murah tranfer ke semua bank dengan biaya admin mulai Rp. 5000",
      link: "transfer",
      tersedia: false
    },
    {
      name: "Tarik Tunai Semua Bank",
      desc: "Murah tranfer ke semua bank dengan biaya admin mulai Rp. 5000",
      link: "transfer",
      tersedia: false
    }
  ];

  return (
    <Layout>
      <StyledHome>
        <section>
          <Title>Produk Digital</Title>
          <Wrapper>
            {productDigital.map((item, index) => (
              <Product
                key={index}
                name={item.name}
                desc={item.desc}
                link={item.link}
                tersedia={item.tersedia}
              />
            ))}
          </Wrapper>
        </section>

        <hr />

        <section>
          <Title>Layanan Digital</Title>
          <Wrapper>
            {layananDigital.map((item, index) => (
              <Product
                key={index}
                name={item.name}
                desc={item.desc}
                link={item.link}
                tersedia={item.tersedia}
              />
            ))}
          </Wrapper>
        </section>
      </StyledHome>
    </Layout>
  );
};

export default Home;
