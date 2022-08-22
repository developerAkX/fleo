import React from "react";
import FeatureBox from "./FeatureBox";
import feature1 from "../../images/feature-1.png";
import feature2 from "../../images/feature-2.png";
import feature3 from "../../images/feature-3.png";
import feature4 from "../../images/feature-4.png";
import backSvg from "../../images/back-bron.svg";
import styled from "@emotion/styled";

function Section4() {
  const list = [
    {
      top: 0,
      scale: 0.94,
      image: feature1,
      title: "Take faster and impactful decision using Fleo",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
    {
      top: 20,
      scale: 0.96,
      image: feature2,
      title: "Conduct regular internal business reviews with ease",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
    {
      top: 40,
      scale: 0.98,
      image: feature3,
      title: "Take faster and impactful decision using Fleo",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
    {
      top: 60,
      scale: 1,
      image: feature4,
      title: "Check your bandwitdh and make every second count",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
  ];
  return (
    <Root>
      <TextSection>
        <h4>
          <span>Know the performance pulse to take</span>
          <span>better decisions</span>
        </h4>
        <p>
          <span>Fleo shows you the areas that need your attention</span>
          <span>and winners who should be appreciated</span>
        </p>
      </TextSection>
      <Main>
        <div className="brownBox" />
        <main>
          {list &&
            list.map((i, index) => {
              return <FeatureBox key={index} item={i} />;
            })}
        </main>
      </Main>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-block: 100px;
  padding-bottom: 0px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${backSvg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  flex: 1;
  padding-bottom: 50px;
  .brownBox {
    position: absolute;
    background: #56402a;
    height: 50%;
    top: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  @media (min-width: 1232px) {
    width: calc(100vw - 20px);
  }
  main {
    width: calc(100vw - 20px);
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: column;
    max-width: var(--max-box-width);
    position: relative;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  padding-inline: 10px;
  padding-block: 20px;
  position: sticky;
  top: 60px;
  background: #fffaf4;

  z-index: 1;
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.4;
    text-align: center;
    color: #56402a;
    margin: 0;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    span {
      display: block;
    }
  }

  @media (max-width: 1490px) {
    font-size: 14px;
  }

  @media (max-width: 1141px) {
    font-size: 12.5px;
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1.7em;
    }
  }

  @media (max-width: 887px) {
    font-size: 12px;
    text-align: center;
    align-items: center;
    p {
      font-size: 1.7em;
      line-height: 1.4;
    }
  }

  @media (max-width: 532px) {
    font-size: 11px;
  }

  @media (max-width: 400px) {
    p {
      width: 88%;
    }
  }
`;

export default Section4;
