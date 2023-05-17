import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartOverlay extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.isVisible}>
        <strong>My Bag </strong> {this.props.cart.length} items
        {this.props.cart.map((product) => (
          <div className="cartOverlayProduct">
            <div className="cartOverlayProductContent">
              <div>{product.name}</div>
              <div>
                {this.props.currencySymbol}
                {(product.price * this.props.currencyRate).toFixed(2)}
              </div>
              <div>
                <strong>SIZE:</strong>
              </div>
              <div>{product.size}</div>
              <div>
                <strong>COLOR:</strong>
              </div>
              <div>{product.color}</div>
            </div>
            <img
              className="cartOverlayProductImage"
              src={product.picture}
            ></img>
            <div className="cartButtonsContainer">
              <button onClick={() => this.props.onQuantityChange(product, "+")}>
                +
              </button>
              <div className="quantity">{product.quantity}</div>
              <button
                onClick={() => this.props.onQuantityChange(product, "-")}
                className="cartMinus"
              >
                -
              </button>
            </div>
          </div>
        ))}
        <div>
          <strong>TOTAL:</strong> {this.props.currencySymbol}{" "}
          {(this.props.totalPrice * this.props.currencyRate).toFixed(2)}
        </div>
        <Link to="/cart">
          <button className="button">VIEW BAG</button>
        </Link>
        <button className="button">CHECK OUT</button>
      </div>
    );
  }
}

export default CartOverlay;
