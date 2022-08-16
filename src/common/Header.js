import React from "react";
import {
  Root,
  StyledNavLink,
  NavMain,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  NavTabMenu,
  StyledLink,
} from "./NavBarElements";

import logo from "../images/logo.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import useSticky from "../hooks/useSticky";
import classNames from "classnames";

function Header() {
  const isMinWidth723 = useMediaQuery("(min-width: 768px)");
  const { sticky, stickyRef } = useSticky();
  
  return (
    <Root ref={stickyRef} className={classNames({ sticky })}>
      <NavMain>
        <NavMenu>
          <Logo src={logo} alt="" />
          {isMinWidth723 && (
            <>
              <StyledNavLink to="/" activeStyle>
                Home
              </StyledNavLink>
              <StyledNavLink to="/products" activeStyle>
                Products
              </StyledNavLink>
              <StyledNavLink to="/why-us" activeStyle>
                Why us?
              </StyledNavLink>
              <StyledNavLink to="/pricing" activeStyle>
                Pricing
              </StyledNavLink>
            </>
          )}
        </NavMenu>
        <NavBtn>
          <StyledLink to="/sign-up">Sign In</StyledLink>
          <NavBtnLink to="/demo">Request Demo</NavBtnLink>
        </NavBtn>
      </NavMain>
      <NavTabMenu>
        {!isMinWidth723 && (
          <>
            <StyledNavLink to="/" activeStyle>
              Home
            </StyledNavLink>
            <StyledNavLink to="/products" activeStyle>
              Products
            </StyledNavLink>
            <StyledNavLink to="/why-us" activeStyle>
              Why us?
            </StyledNavLink>
            <StyledNavLink to="/pricing" activeStyle>
              Pricing
            </StyledNavLink>
          </>
        )}
      </NavTabMenu>
    </Root>
  );
}

export default Header;
