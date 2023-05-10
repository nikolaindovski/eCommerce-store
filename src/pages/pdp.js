import React, { Component } from "react";

class PDP extends Component {
  state = {
    properties: [{ size: "m", color: "black" }],
  };
  render() {
    return (
      <div className="pdpContainer">
        <h1>PDPDPDPDPDPDPDPDPDPDP</h1>
        <img className="pdpImage" src={this.props.product.picture}></img>
        <div className="pdpContent">
          <div>{this.props.product.name}</div>
          <div>
            <strong>SIZE:</strong>
          </div>
          <label className="radioLabel">
            XS
            <input
              className="radioSize"
              onChange={this.props.onSizeSelect}
              type="radio"
              name="size"
              value="xs"
            ></input>
          </label>
          <label className="radioLabel">
            S
            <input
              className="radioSize"
              onChange={this.props.onSizeSelect}
              type="radio"
              name="size"
              value="s"
            ></input>
          </label>
          <label className="radioLabel">
            M
            <input
              className="radioSize"
              onChange={this.props.onSizeSelect}
              type="radio"
              name="size"
              value="m"
            ></input>
          </label>
          <label className="radioLabel">
            L
            <input
              className="radioSize"
              onChange={this.props.onSizeSelect}
              type="radio"
              name="size"
              value="l"
            ></input>
          </label>
          <div>
            <strong>COLOR:</strong>
          </div>
          <label className="radioLabel">
            Gray
            <input
              onChange={this.props.onColorSelect}
              type="radio"
              name="color"
              value="gray"
            ></input>
          </label>
          <label className="radioLabel">
            Black
            <input
              onChange={this.props.onColorSelect}
              type="radio"
              name="color"
              value="black"
            ></input>
          </label>
          <label className="radioLabel">
            Green
            <input
              onChange={this.props.onColorSelect}
              type="radio"
              name="color"
              value="green"
            ></input>
          </label>
          <div>
            <strong>PRICE:</strong>
          </div>
          <div>
            {this.props.currencySymbol}
            {(this.props.product.price * this.props.currencyRate).toFixed(2)}
          </div>
          <button className="button" onClick={() => this.props.onAddToCart(this.props.product)}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }

  handleColorSelect = (event) => {
    let state = this.state;
    state.properties.color = event.target.value;
    this.setState({ state });
    console.log(this.state.properties);
  };

  handleSizeSelect = (event) => {
    let state = this.state;
    state.properties.size = event.target.value;
    this.setState({ state });
    console.log(this.state.properties);
  };
}

export default PDP;
