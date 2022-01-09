import React, { Component } from "react";
import styled from "styled-components";

import { ReactComponent as VectorIcon } from "../../assets/icons/Vector.svg";

export default class HeaderCurrency extends Component {
  render() {
    return (
      <CurrencyWrapper>
        <Currency>$</Currency>
        <VectorIcon />
      </CurrencyWrapper>
    );
  }
}

const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Currency = styled.div`
  font-family: Raleway;
  font-weight: ${(p) => p.theme.font.weight.medium};
  margin-right: 10px;
  font-weight: 500;
  font-size: 18px;
  color: ${(p) => p.theme.colors.cBlack};
`;
