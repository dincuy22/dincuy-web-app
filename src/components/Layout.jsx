import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledLayout = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
