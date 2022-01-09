import React, { Component } from "react";
import styled from "styled-components";
import HeaderCurrency from "./headerCurrency";
import HeaderCart from "./headerCart/headerCart";
import Logo from "../../assets/logo.png";
export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderLink style={{ marginRight: "32px" }}>Women</HeaderLink>
          <HeaderLink style={{ marginRight: "32px" }}>Men</HeaderLink>
          <HeaderLink>KIDS</HeaderLink>
        </HeaderLeft>
        <HeaderCenter>
          <HeaderIcon>
            <img src={Logo} alt="Logo" />
          </HeaderIcon>
        </HeaderCenter>
        <HeaderRight>
          <HeaderRightSection>
            <HeaderCurrency />
          </HeaderRightSection>
          <HeaderRightSection>
            <HeaderCart />
          </HeaderRightSection>
        </HeaderRight>
      </HeaderWrapper>
    );
  }
}
const HeaderWrapper = styled.div`
  min-width: 100vw;
  background: ${(p) => p.theme.colors.cWhite};
  font-family: "Raleway", sans-serif;
  margin: 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeaderLink = styled.div`
  cursor: pointer;
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 16px;

  color: ${(p) => p.theme.colors.cBlack};
  font-family: "Raleway", sans-serif;
  &:active,
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.cPrimary};
    border-bottom: 2px solid ${(p) => p.theme.colors.cPrimary};
  }
`;
const HeaderCenter = styled.div``;
const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: right;
  margin-right: 95px;
`;
const HeaderRightSection = styled.div`
  margin-left: 22px;
`;
const HeaderIcon = styled.div``;
