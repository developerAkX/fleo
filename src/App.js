import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./components/home/Home";
import Products from "./components/products/Products";

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Container>
        </Main>
        <Footer />
      </Router>
    </Root>
  );
}

export default App;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  --margin-inline-root: 3rem;
  @media (max-width: 723px) {
    --margin-inline-root: 1.3rem;
  }
  @media (max-width: 426px) {
    --margin-inline-root: 1rem;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 74rem;
  margin-inline: var(--margin-inline-root);
`;
