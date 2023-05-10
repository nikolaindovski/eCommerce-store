import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Product from "./components/product";
import shirt from "./product_images/woman/shirt.jpg";
import tshirt from "./product_images/woman/t-shirt.jpg";
import jacket from "./product_images/woman/jacket.jpg";
import hoodie from "./product_images/woman/hoodie.jpg";
import jeans from "./product_images/woman/jeans.jpg";
import boots from "./product_images/woman/boots.jpg";

import shirtMan from "./product_images/man/shirt.jpg";
import tshirtMan from "./product_images/man/t-shirt.jpg";
import jacketMan from "./product_images/man/jacket.jpg";
import hoodieMan from "./product_images/man/hoodie.jpg";
import jeansMan from "./product_images/man/jeans.jpg";
import bootsMan from "./product_images/man/boots.jpg";

import shirtKids from "./product_images/kids/shirt.jpg";
import tshirtKids from "./product_images/kids/t-shirt.jpg";
import jacketKids from "./product_images/kids/jacket.jpg";
import hoodieKids from "./product_images/kids/hoodie.jpg";
import jeansKids from "./product_images/kids/jeans.jpg";
import bootsKids from "./product_images/kids/boots.jpg";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import PDP from "./pages/pdp";

class App extends Component {
  state = {
    categories: [
      { id: 1, name: "WOMAN", active: 1 },
      { id: 2, name: "MAN", active: 0 },
      { id: 3, name: "KIDS", active: 0 },
    ],
    products: [
      { id: 1, name: "Shirt", price: 45, picture: shirt },
      { id: 2, name: "T-shirt", price: 55, picture: tshirt },
      { id: 3, name: "Jacket", price: 65, picture: jacket },
      { id: 4, name: "Hoodie", price: 75, picture: hoodie },
      { id: 5, name: "Jeans", price: 85, picture: jeans },
      { id: 6, name: "Boots", price: 95, picture: boots },
    ],
    productsWoman: [
      { id: 1, name: "Shirt", price: 45, picture: shirt },
      { id: 2, name: "T-shirt", price: 55, picture: tshirt },
      { id: 3, name: "Jacket", price: 65, picture: jacket },
      { id: 4, name: "Hoodie", price: 75, picture: hoodie },
      { id: 5, name: "Jeans", price: 85, picture: jeans },
      { id: 6, name: "Boots", price: 95, picture: boots },
    ],
    productsMan: [
      { id: 1, name: "Shirt", price: 35, picture: shirtMan },
      { id: 2, name: "T-shirt", price: 45, picture: tshirtMan },
      { id: 3, name: "Jacket", price: 55, picture: jacketMan },
      { id: 4, name: "Hoodie", price: 65, picture: hoodieMan },
      { id: 5, name: "Jeans", price: 75, picture: jeansMan },
      { id: 6, name: "Boots", price: 85, picture: bootsMan },
    ],
    productsKids: [
      { id: 1, name: "Shirt", price: 25, picture: shirtKids },
      { id: 2, name: "T-shirt", price: 35, picture: tshirtKids },
      { id: 3, name: "Jacket", price: 45, picture: jacketKids },
      { id: 4, name: "Hoodie", price: 55, picture: hoodieKids },
      { id: 5, name: "Jeans", price: 65, picture: jeansKids },
      { id: 6, name: "Boots", price: 75, picture: bootsKids },
    ],
    tempProduct: [{ id: 1, name: "Shirt", price: 35, picture: shirt }],
    cartItem: {
      id: 1,
      name: "Shirt",
      price: 35,
      picture: shirt,
      size: "m",
      color: "black",
      quantity: 1,
    },
    currencies: [
      { name: "usd", symbol: "$", active: 1, value: 1 },
      { name: "eur", symbol: "€", active: 0, value: 0.91 },
      { name: "jpy", symbol: "¥", active: 0, value: 135.1 },
    ],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  };

  render() {
    return (
      <React.Fragment>
        <div className="rectangle">
          <NavBar
            categories={this.state.categories}
            onCategoryClick={this.handleCategoryChange}
            cart={this.state.cart}
            onQuantityChange={this.handleQuantityChange}
            onCurrencySelect={this.handleCurrencySelect}
            currencyRate={this.currencyRate()}
            currencySymbol={this.currencySymbol()}
            totalPrice={this.totalPrice()}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  categories={this.state.categories}
                  products={this.state.products}
                  onProductClick={this.handleProductClick}
                  currencyRate={this.currencyRate()}
                  currencySymbol={this.currencySymbol()}
                />
              }
            />
            <Route
              path="/pdp"
              element={
                <PDP
                  product={JSON.parse(localStorage.getItem("selectedProduct"))}
                  onAddToCart={this.handleAddToCart}
                  onColorSelect={this.handleColorSelect}
                  onSizeSelect={this.handleSizeSelect}
                  currencyRate={this.currencyRate()}
                  currencySymbol={this.currencySymbol()}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={this.state.cart}
                  currencyRate={this.currencyRate()}
                  currencySymbol={this.currencySymbol()}
                  onQuantityChange={this.handleQuantityChange}
                  totalPrice={this.totalPrice()}
                  totalQuantity={this.totalQuantity()}
                />
              }
            />
          </Routes>
        </div>
      </React.Fragment>
    );
  }

  handleCategoryChange = (category) => {
    const categories = this.state.categories.map((category) => {
      category.active = 0;
      return category;
    });
    const index = categories.indexOf(category);
    categories[index].active = 1;
    this.setState({ categories });

    let products = this.state.products;
    categories[0].active === 1
      ? (products = this.state.productsWoman)
      : (products = products);
    categories[1].active === 1
      ? (products = this.state.productsMan)
      : (products = products);
    categories[2].active === 1
      ? (products = this.state.productsKids)
      : (products = products);
    this.setState({ products });
  };

  handleCurrencySelect = (selected) => {
    let state = this.state;
    state.currencies.map((currency) =>
      currency.name === selected ? (currency.active = 1) : (currency.active = 0)
    );
    this.setState({ state });
    console.log(this.state.currencies);
  };

  currencyRate() {
    let x;
    this.state.currencies.map((currency) =>
      currency.active === 1 ? (x = currency.value) : (x = x * 1)
    );
    return x;
  }

  currencySymbol() {
    let x;
    this.state.currencies.map((currency) =>
      currency.active === 1 ? (x = currency.symbol) : (x = x)
    );
    return x;
  }

  handleProductClick = (product) => {
    localStorage.removeItem("selectedProduct");
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    this.setState({
      tempProduct: JSON.parse(localStorage.getItem("selectedProduct")),
    });
  };

  handleColorSelect = (event) => {
    let state = this.state;
    state.cartItem.color = event.target.value;
    this.setState({ state });
    console.log(this.state.properties);
  };

  handleSizeSelect = (event) => {
    let state = this.state;
    state.cartItem.size = event.target.value;
    this.setState({ state });
    console.log(this.state.properties);
  };

  handleAddToCart = (product) => {
    let array = JSON.parse(localStorage.getItem("cart")) || [];
    let state = this.state;
    state.cartItem.id = product.id;
    state.cartItem.name = product.name;
    state.cartItem.price = product.price;
    state.cartItem.picture = product.picture;
    state.cartItem.quantity = 1;
    array.push(state.cartItem);
    localStorage.setItem("cart", JSON.stringify(array));
    this.setState({ state });
    this.setState({ cart: array });
  };

  handleQuantityChange = (product, sign) => {
    console.log(product, sign);
    let array = JSON.parse(localStorage.getItem("cart")) || [];
    array.map((item) =>
      item.picture === product.picture
        ? sign === "+"
          ? item.quantity++
          : item.quantity--
        : (item = item)
    );
    array = array.filter((item) => item.quantity > 0);
    this.setState({ cart: array });
    localStorage.setItem("cart", JSON.stringify(array));
  };

  totalPrice() {
    let cart = this.state.cart;
    let x = 0;
    cart.map((item) => (x = x + item.price * item.quantity));
    return x;
  }
  totalQuantity() {
    let cart = this.state.cart;
    let x = 0;
    cart.map((item) => (x = x + item.quantity));
    return x;
  }
}

export default App;
