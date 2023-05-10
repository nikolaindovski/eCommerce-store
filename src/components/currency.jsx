import React, { Component } from "react";

class Currency extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.isVisible}>
        <div onClick={() => this.props.onCurrencySelect("usd")} className="currencyContent">$ USD</div>
        <div onClick={() => this.props.onCurrencySelect("eur")} className="currencyContent">€ EUR</div>
        <div onClick={() => this.props.onCurrencySelect("jpy")} className="currencyContent">¥ JPY</div>
      </div>
    );
  }
}

export default Currency;
