import React, { Component } from "react";
import { ReactComponent as EmptyCartIcon } from "../../../assets/icons/EmptyCart.svg";

export default class HeaderCart extends Component {
  render() {
    return (
      <div>
        {" "}
        <EmptyCartIcon />
      </div>
    );
  }
}
