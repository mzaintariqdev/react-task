import React, { Component } from "react";
import styled from "styled-components";
import headerCart from "./headerCart/headerCart";
import headerCurrency from "./headerCurrency";

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderLink></HeaderLink>
          <HeaderLink></HeaderLink>
          <HeaderLink></HeaderLink>
        </HeaderLeft>
        <HeaderCenter>
          <HeaderIcon></HeaderIcon>
        </HeaderCenter>
        <HeaderRight>
          <headerCurrency />
          <headerCart />
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
`;

const HeaderLeft = styled.div``;
const HeaderLink = styled.div``;
const HeaderCenter = styled.div``;
const HeaderRight = styled.div``;
const HeaderIcon = styled.div``;
