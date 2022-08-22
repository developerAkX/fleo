import styled from "@emotion/styled";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import img from "../../images/integration.svg";
import imgMobile from "../../images/integrationMobile.svg";

function Section5() {
  const isMinWidth780 = useMediaQuery("(min-width: 780px)");
  return (
    <Root>
      <TextSection>
        <Title>
          <strong>Integration</strong>
        </Title>
        <Description>
          Fleo captures everyone’s involvement and helps with uniform
          distribution of work.
        </Description>
      </TextSection>
      {isMinWidth780 ? <Image src={img} /> : <Image src={imgMobile} />}
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  grid-template-areas:
    "."
    ".";
  justify-content: center;
  align-content: space-between;
  justify-items: center;
  align-items: stretch;
  width: 100%;
  background: #fff;
  padding-block: 20px;
  padding-bottom: 60px;
`;

const Image = styled.img`
  max-width: var(--max-box-width);
  width: 80vw;
  @media (max-width: 893px) {
    width: 80vw;
  }
`;

const TextSection = styled.div`
  text-align: center;
  width: 90vw;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #56402a;
  }
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  color: #000000;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export default Section5;
