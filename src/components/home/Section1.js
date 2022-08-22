import React from "react";
import image from "../../images/Header_Illustration.png";
import logo1 from "../../images/arrivae.svg";
import logo2 from "../../images/jobs.svg";
import logo3 from "../../images/bizom.svg";
import logo4 from "../../images/phable.svg";
import logo5 from "../../images/safex.svg";
import styled from "@emotion/styled";
import { NavBtnLink } from "../../common/NavBarElements";

function Section1() {
  return (
    <>
      <Root>
        <Main>
          <TextSection>
            <h2>Create high performance</h2>
            <h2>culture with OKRs</h2>

            <strong>
              Use Fleo to make goals effective and gets teams focused on company
              growth
              <span className="showBar" />
            </strong>
            <StyledButtonLink to="/demo">Request Demo</StyledButtonLink>
          </TextSection>
          <Image alt="" src={image} />
        </Main>
      </Root>
      <PartnersMain>
        <main>
          <img alt="" src={logo1} className="client_logo" />
          <img alt="" src={logo2} className="client_logo" />
          <img alt="" src={logo3} className="client_logo" />
          <img alt="" src={logo4} className="client_logo" />
          <img alt="" src={logo5} className="client_logo hidable" />
        </main>
      </PartnersMain>
      <StyledButtonLink className="forMobile" to="/demo">
        Request Demo
      </StyledButtonLink>
    </>
  );
}

export default Section1;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-box-width - 20px);
  padding-inline: var(--margin-inline-root);
  overflow: hidden;
`;

const StyledButtonLink = styled(NavBtnLink)`
  font-size: 18px;
  margin-top: 25px;
  margin-left: 0px;
  display: flex;
  &.forMobile {
    display: none;
  }
  @media (max-width: 1116px) {
    &.forMobile {
      display: flex;
      align-self: stretch;
      margin-left: calc(var(--margin-inline-root) + 1rem);
      margin-right: calc(var(--margin-inline-root) + 1rem);
    }
    display: none;
  }
`;

const PartnersMain = styled.div`
  background-color: #ffffff;
  align-items: center;
  display: flex;
  gap: 10px;
  height: 90px;
  width: 100%;
  justify-content: space-evenly;
  main {
    align-items: center;
    display: flex;
    gap: 10px;
    height: 90px;
    width: 90vw;
    justify-content: space-evenly;
  }
  .client_logo {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
  @media (max-width: 900px) {
    justify-content: space-evenly;
    .client_logo {
      height: 30px;
      gap: 0px;
    }
  }
  @media (max-width: 777px) {
    justify-content: space-evenly;
    .client_logo {
      height: 25px;
      gap: 0px;
    }
    height: 75px;
  }
  @media (max-width: 595px) {
    justify-content: space-evenly;
    .client_logo {
      height: 23px;
      gap: 0px;
    }
    .hidable {
      display: none;
    }
  }

  @media (max-width: 432px) {
    .client_logo {
      height: 19px;
    }
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  /* height: calc(100vh - 80px); */
  margin-top: 80px;
  align-items: center;
  gap: 40px;
  @media (max-width: 1116px) {
    margin-top: 10px;
    text-align: center;
    flex-direction: column;
    gap: 90px;
  }
`;

const Image = styled.img`
  flex: 0.5;
  height: auto;
  width: 88%;
  object-fit: contain;
  @media (max-width: 1116px) {
    flex: 0.5;
    margin-top: -16rem;
    /* margin-right: calc(var(--margin-inline-root) * -1 + -150px); */
    margin-right: -30%;
  }
  @media (max-width: 723px) {
    margin-top: 0px;
  }

  @media (max-width: 580px) {
    margin-right: -50%;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  min-height: 30rem;
  font-size: 16px;
  margin-right: 50px;
  h2 {
    font-weight: 800;
    font-size: 3.125em;
    color: #56402a;
    white-space: nowrap;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 1116px) {
    align-items: center;
  }

  strong {
    display: flex;
    flex-direction: row-reverse;

    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.7;
    color: #000000;
    /* padding-left: 30px; */
    /* border-left: 4px solid #395fe2; */
    margin-top: 20px;
    .showBar {
      display: block;
      width: 6px;
      background: #395fe2;
      margin-right: 25px;
    }
    @media (max-width: 1116px) {
      flex-direction: column;
      align-items: center;
      .showBar {
        width: 90px;
        height: 5px;
        background: #395fe2;
        margin: 0px;
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 1116px) {
    margin-right: 0px;
    max-width: 30rem;
    /* margin-top: 4rem; */
  }

  @media (max-width: 1490px) {
    font-size: 14px;
  }

  @media (max-width: 723px) {
    min-height: fit-content;
  }
  @media (max-width: 619px) {
    font-size: 12px;
  }
  @media (max-width: 536px) {
    font-size: 11px;
    margin-right: 0;
    margin-left: 0;
    h2 {
      width: 95vw;
      white-space: unset;
      padding-inline: 16px;
    }
    strong {
      width: 95vw;
      padding-inline: 16px;
    }
    max-width: 80vw;
  }
  @media (max-width: 469px) {
    h2 {
      font-size: 2.85em;
    }
  }
  @media (max-width: 426px) {
    font-size: 10.8px;
    strong {
      margin-top: 20px;
    }
  }

  @media (max-width: 426px) {
    /* margin-left: 0.5rem;
    margin-right: 0.5rem; */
  }
  @media (max-width: 400px) {
    font-size: 10.2px;
  }
`;
