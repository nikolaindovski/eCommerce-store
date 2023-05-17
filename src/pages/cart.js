import React, { Component } from "react";

const dataLayer = window.dataLayer || [];

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="cartTitle">CART</h1>

        {this.props.cart.map((product) => (
          <div className="cartProduct">
            <div className="cartProductContent">
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

            <img className="cartProductImage" src={product.picture}></img>
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
        <div className="totalPrice">
          <div>
            <strong>TAX 21%:</strong> {this.props.currencySymbol}{" "}
            {(this.props.totalPrice * 0.21 * this.props.currencyRate).toFixed(
              2
            )}{" "}
          </div>
          <div>
            <strong>QUANTITY:</strong> {this.props.totalQuantity}
          </div>
          <div>
            <strong>TOTAL:</strong> {this.props.currencySymbol}{" "}
            {(
              (this.props.totalPrice + this.props.totalPrice * 0.21) *
              this.props.currencyRate
            ).toFixed(2)}
          </div>
          <div>
            <button className="button">ORDER</button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.cart.map(
      (product) => (
        dataLayer.push({ ecommerce: null }),
        dataLayer.push({
          event: "checkout",
          currency: this.props.currencySymbol,
          ecommerce: {
            actionPage: "Cart Page",
            products: [
              {
                name: product.name,
                id: product.id,
                price: product.price * this.props.currencyRate,
                quantity: product.quantity,
                dimension1: product.id + "-" + product.size,
                dimension2: product.name + "-" + product.color,
              },
            ],
          },
        })
      )
    );
  }
}

export default Cart;
