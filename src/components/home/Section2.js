import React from "react";
import styled from "styled-components";
import image from "../../images/section_2_ilstr.png";

function Section2() {
  return (
    <Root>
      <Image src={image} />
      <TextSection>
        <h3 className="hidable-h3">Plan Better</h3>
        <h3>Do Better</h3>
        <p>
          Spend sometime planning the success map{" "}
          <span className="hidable">
            Lorem ipsum dolor sit amet, consctetur adipisc ing elit. Lorem ipsum
            dolor sit. Lorem ipsum dolLorem ipsum dolor sit amet,
            consectetur.Lorem ipsum dolor sit amet, sit amet, consectetur.Lorem
            ipsum dolor sit amet,
          </span>
        </p>
      </TextSection>
    </Root>
  );
}

export default Section2;

const Root = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--max-box-width);
  padding-block: 100px;
  gap: 60px;
  @media (max-width: 1325px) {
    padding-inline: 40px;
  }
  @media (max-width: 887px) {
    flex-direction: column-reverse;
    padding-block: 50px;
  }
`;

const Image = styled.img`
  flex: 0.5;
  height: auto;
  width: 50%;
  object-fit: contain;
  @media (max-width: 887px) {
    flex-direction: column-reverse;
    padding-block: 50px;
    width: 80%;
  }
  @media (max-width: 430px) {
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  width: 90%;

  h3 {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 3.125em;
    line-height: 1.3;
    margin: 0;

    color: #56402a;
  }

  p {
    margin: 0;
    margin-top: 10px;
    font-family: "Mulish";
    font-weight: 400;
    font-size: 1.45em;
    /* letter-spacing: 0.1px; */
    line-height: 1.6;
    /* letter-spacing: 0.8px; */
    color: #000000;
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

      .hidable {
        display: none;
      }
    }
    .hidable-h3 {
      display: none;
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
