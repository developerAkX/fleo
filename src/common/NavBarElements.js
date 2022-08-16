import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";

export const Root = styled.nav`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  box-shadow: 10px 10px 5px -10px rgba(206, 176, 147, 0.8);
  padding-inline: var(--margin-inline-root);
  @media (max-width: 723px) {
    flex-direction: column;
    align-items: stretch;
    padding-top: 15px;
    gap: 7px;
  }
  /* position: fixed; */
  left: 0;
  right: 0;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  margin-right: 50px;
  @media (max-width: 765px) {
    margin-right: 20px;
  }
`;

export const NavMain = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 6);
  z-index: 12;
  height: 70px;
  max-width: 78rem;
  flex: 1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #56402a;
`;

export const StyledNavLink = styled(NavLink)`
  color: #56402a;
  display: flex;
  font-weight: 700;
  font-size: 14px;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;

  height: 50%;
  cursor: pointer;
  &.active {
    color: #2a52e0;
    border-bottom: 2px solid #2a52e0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavTabMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  height: 50px;
  padding-bottom: 10px;
  justify-content: space-between;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* margin-right: 24px; */
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
  white-space: nowrap;
`;

export const NavBtnLink = styled(NavLink)`
  border-radius: 4px;
  background: #df581e;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    background: #c9450c;
    color: #56402a;
    color: #fff;
  }
`;
