import React from "react";
import image from "../../images/Header_Illustration.png";
import logo1 from "../../images/arrivae.svg";
import logo2 from "../../images/jobs.svg";
import logo3 from "../../images/bizom.svg";
import logo4 from "../../images/phable.svg";
import logo5 from "../../images/safex.svg";
import styled from "@emotion/styled";

function Section1() {
  return (
    <Root>
      <Main>
        <TextSection>
          <h2>Create high performance</h2>
          <h2>culture with OKRs</h2>
          <strong>
            Use Fleo to make goals effective and gets teams focused on company
            growth
          </strong>
        </TextSection>
        <Image alt="" src={image} />
      </Main>
      {/* <div className="clients_div">
        <img src={logo1} className="client_logo" />
        <img src={logo2} className="client_logo" />
        <img src={logo3} className="client_logo" />
        <img src={logo4} className="client_logo" />
        <img src={logo5} className="client_logo" />
      </div> */}
    </Root>
  );
}

export default Section1;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  height: 100vh;
  align-items: center;

  @media (max-width: 1116px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  flex: 0.5;
  height: auto;
  width: 100%;
  object-fit: contain;
  @media (max-width: 1116px) {
    flex: 0.5;
    margin-top: -16rem;
    margin-right: calc(var(--margin-inline-root) * -1 + -50px);
  }

  @media (max-width: 658px) {
    margin-top: -18.5rem;
  }
  @media (max-width: 532px) {
    margin-top: -26rem;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  min-height: 30rem;
  font-size: 16px;

  h2 {
    font-family: "Mulish";
    font-weight: 800;
    font-size: 3.125em;
    color: #56402a;
    white-space: nowrap;
    line-height: 1.6;
    margin: 0;
  }

  strong {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.7;
    color: #000000;
    padding-left: 30px;
    border-left: 4px solid #395fe2;
    margin-top: 20px;
  }

  @media (max-width: 1116px) {
    max-width: 30rem;
    margin-top: 4rem;
  }

  @media (max-width: 1490px) {
    font-size: 14px;
  }

  @media (max-width: 723px) {
    margin-left: -3rem;
    min-height: fit-content;
  }
  @media (max-width: 619px) {
    font-size: 12px;
    margin-left: 1rem;
  }
  @media (max-width: 532px) {
    font-size: 11px;
    margin-top: 7rem;
  }
  @media (max-width: 469px) {
    h2 {
      font-size: 2.85em;
    }
  }
  @media (max-width: 426px) {
    font-size: 10.8px;
    strong {
      padding-left: 15px;
      margin-top: 20px;
    }
  }

  @media (max-width: 426px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 400px) {
    font-size: 10.2px;
  }
`;
