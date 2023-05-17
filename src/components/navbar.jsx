import React, { Component } from "react";
import Category from "./category";
import logo from "../a-logo.png";
import cartPicture from "../cart.png";
import CartOverlay from "./cartOverlay";
import Currency from "./currency";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { overlay: [{ cart: 0, currency: 0 }] };
  render() {
    return (
      <nav>
        {this.props.categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onCategoryClick={this.props.onCategoryClick}
          ></Category>
        ))}
        <Link className="logo" to="/">
          <img src={logo}></img>
        </Link>
        <div className="spacerActions"></div>
        <div className="actions">
          <div className="currencyContent" onClick={this.handleCurrencyOverlay}>
            $
          </div>
          <img
            onClick={this.handleCartOverlay}
            className="cartIcon"
            src={cartPicture}
          ></img>
          <Currency
            isVisible={this.getCurrencyClasses()}
            onCurrencySelect={this.props.onCurrencySelect}
          />
          <CartOverlay
            cart={this.props.cart}
            isVisible={this.getCartClasses()}
            currencyRate={this.props.currencyRate}
            currencySymbol={this.props.currencySymbol}
            onQuantityChange={this.props.onQuantityChange}
            totalPrice={this.props.totalPrice}
          />
        </div>
      </nav>
    );
  }

  handleCartOverlay = () => {
    let state = this.state;
    state.overlay.cart ? (state.overlay.cart = 0) : (state.overlay.cart = 1);
    state.overlay.currency = 0;
    this.setState({ state });
  };

  handleCurrencyOverlay = () => {
    let state = this.state;
    state.overlay.currency
      ? (state.overlay.currency = 0)
      : (state.overlay.currency = 1);
    state.overlay.cart = 0;
    this.setState({ state });
  };

  getCartClasses() {
    return this.state.overlay.cart === 1 ? "cartOverlay" : "hide";
  }

  getCurrencyClasses() {
    return this.state.overlay.currency === 1 ? "currency" : "hide";
  }
}

export default NavBar;
