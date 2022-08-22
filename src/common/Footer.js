import React from "react";
import whitelogo from "../images/fleo_white.svg";
import fb from "../images/fb.svg";
import whatsapp from "../images/whatsapp.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Root className="footer_main">
      <div className="footer_address">
        <span className="footer_text">
          Email: <b>hello@fleo.io</b>
        </span>
        <br />
        <span className="footer_text">
          Phone: <b>+91 87654 44000</b>
        </span>
        <br />
        <span className="footer_text">
          Address:{" "}
          <b>
            No. 1207/343, 9th Main, Sector 7, HSR Layout, Bengaluru, Karnataka -
            560102
          </b>
        </span>
      </div>
      <div className="logoContainer">
        <img alt="" src={whitelogo} />
        <div className="linkContainer">
          <Link to="/">About Us</Link>
          <Link to="/">Privacy policy</Link>
          <Link to="/">Terms and conditions</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
      <div className="footer_social">
        <div className="footer_social_inner" style={{ marginBottom: 30 }}>
          <a href="/#">
            <img alt="" src={linkedin} className="social_icons" />
          </a>

          <a href="/#">
            <img alt="" src={fb} className="social_icons" />
          </a>
          <a href="/#">
            <img alt="" src={whatsapp} className="social_icons" />
          </a>
          <a href="/#">
            <img alt="" src={twitter} className="social_icons" />
          </a>
        </div>
        <span className="footer_quote">
          Fleo shows you the areas that need your attention, it will be your
          go-to tool for internal business reviews
        </span>
      </div>
    </Root>
  );
}

const Root = styled.div`
  height: 444px;
  background: #56402a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  max-width: var(--max-box-width);
  padding-inline: var(--margin-inline-root);

  @media (min-width: 1296px) {
    max-width: 100%;
  }

  .logoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    img {
      align-self: center;
      max-width: 158px;
    }
  }
  .linkContainer {
    display: flex;
    flex-direction: row;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    a {
      text-decoration: none;
      color: #fff;

      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: #ffffff;
    }
  }

  .footer_text {
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
  }
  .footer_quote {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .footer_address {
    flex: 0.3;
    text-align: left;
    min-width: 25%;
  }
  .footer_social {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 28%;
  }
  .footer_social_inner {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .footer_main {
    height: 444px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 940px) {
    flex-direction: column;
    .footer_address {
      display: none;
    }
    .footer_quote {
      display: none;
    }

    padding-top: 50px;

    .logoContainer {
      justify-content: space-between;
      gap: 70px;
    }
  }
`;

export default Footer;
