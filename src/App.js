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

const dataLayer = window.dataLayer || [];

class App extends Component {
  state = {
    categories: [
      { id: 1, name: "WOMAN", active: 1 },
      { id: 2, name: "MAN", active: 0 },
      { id: 3, name: "KIDS", active: 0 },
    ],
    products: [
      { id: "woman-#1", name: "Shirt", price: 45, picture: shirt },
      { id: "woman-#2", name: "T-shirt", price: 55, picture: tshirt },
      { id: "woman-#3", name: "Jacket", price: 65, picture: jacket },
      { id: "woman-#4", name: "Hoodie", price: 75, picture: hoodie },
      { id: "woman-#5", name: "Jeans", price: 85, picture: jeans },
      { id: "woman-#6", name: "Boots", price: 95, picture: boots },
    ],
    productsWoman: [
      { id: "woman-#1", name: "Shirt", price: 45, picture: shirt },
      { id: "woman-#2", name: "T-shirt", price: 55, picture: tshirt },
      { id: "woman-#3", name: "Jacket", price: 65, picture: jacket },
      { id: "woman-#4", name: "Hoodie", price: 75, picture: hoodie },
      { id: "woman-#5", name: "Jeans", price: 85, picture: jeans },
      { id: "woman-#6", name: "Boots", price: 95, picture: boots },
    ],
    productsMan: [
      { id: "man-#1", name: "Shirt", price: 35, picture: shirtMan },
      { id: "man-#2", name: "T-shirt", price: 45, picture: tshirtMan },
      { id: "man-#3", name: "Jacket", price: 55, picture: jacketMan },
      { id: "man-#4", name: "Hoodie", price: 65, picture: hoodieMan },
      { id: "man-#5", name: "Jeans", price: 75, picture: jeansMan },
      { id: "man-#6", name: "Boots", price: 85, picture: bootsMan },
    ],
    productsKids: [
      { id: "kids-#1", name: "Shirt", price: 25, picture: shirtKids },
      { id: "kids-#2", name: "T-shirt", price: 35, picture: tshirtKids },
      { id: "kids-#3", name: "Jacket", price: 45, picture: jacketKids },
      { id: "kids-#4", name: "Hoodie", price: 55, picture: hoodieKids },
      { id: "kids-#5", name: "Jeans", price: 65, picture: jeansKids },
      { id: "kids-#6", name: "Boots", price: 75, picture: bootsKids },
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
                  onProductImpression={this.handleGTMProductImpression}
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
                  cartItem={this.state.cartItem}
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

    this.handleGTMProductClick(product);
  };

  handleColorSelect = (event) => {
    let state = this.state;
    state.cartItem.color = event.target.value;
    this.setState({ state });
  };

  handleSizeSelect = (event) => {
    let state = this.state;
    state.cartItem.size = event.target.value;
    this.setState({ state });
  };

  handleAddToCart = (product) => {
    let array = JSON.parse(localStorage.getItem("cart")) || [];
    let state = this.state;
    state.cartItem.id = product.id;
    state.cartItem.name = product.name;
    state.cartItem.price = product.price;
    state.cartItem.picture = product.picture;
    state.cartItem.quantity = 1;
    let productQuantity = 1;
    let duplicate = false;
    array.map((item) =>
      item.picture === state.cartItem.picture &&
      item.color === state.cartItem.color &&
      item.size === state.cartItem.size
        ? (item.quantity++,
          (duplicate = true),
          (productQuantity = item.quantity))
        : (duplicate = duplicate)
    );
    duplicate ? (duplicate = duplicate) : array.push(state.cartItem);
    localStorage.setItem("cart", JSON.stringify(array));
    this.setState({ cart: JSON.parse(localStorage.getItem("cart")) || [] });

    this.handleGTMAddToCart(product, productQuantity);
  };

  handleQuantityChange = (product, sign) => {
    console.log(product, sign);
    let array = JSON.parse(localStorage.getItem("cart")) || [];
    array.map((item) =>
      item.picture === product.picture &&
      item.color === product.color &&
      item.size === product.size
        ? sign === "+"
          ? (item.quantity++, this.handleGTMAddToCart(product, item.quantity))
          : (item.quantity--,
            this.handleGTMRemoveFromCart(product, item.quantity))
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

  handleGTMProductImpression = (product) => {
    const index = this.state.products.indexOf(product);
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      event: "productImpression",
      currency: this.currencySymbol(),
      ecommerce: {
        actionPage: "Category Page",
        product: [
          {
            name: product.name,
            id: product.id,
            price: product.price * this.currencyRate(),
            position: index + 1,
          },
        ],
      },
    });
  };
  handleGTMProductClick = (product) => {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      event: "productClick",
      currency: this.currencySymbol(),
      ecommerce: {
        actionPage: "Category Page",
        product: [
          {
            name: product.name,
            id: product.id,
            price: product.price * this.currencyRate(),
          },
        ],
      },
    });
  };
  handleGTMAddToCart = (product, productQuantity) => {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      event: "addToCart",
      currency: this.currencySymbol(),
      ecommerce: {
        actionPage: "Product Display Page",
        product: [
          {
            name: product.name,
            id: product.id,
            price: product.price * this.currencyRate(),
            quantity: productQuantity,
            dimension1: product.id + "-" + this.state.cartItem.size,
            dimension2: product.name + "-" + this.state.cartItem.color,
          },
        ],
      },
    });
  };
  handleGTMRemoveFromCart = (product, productQuantity) => {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      event: "RemoveFromCart",
      currency: this.currencySymbol(),
      ecommerce: {
        actionPage: "Cart",
        product: [
          {
            name: product.name,
            id: product.id,
            price: product.price * this.currencyRate(),
            quantity: productQuantity,
            dimension1: product.id + "-" + this.state.cartItem.size,
            dimension2: product.name + "-" + this.state.cartItem.color,
          },
        ],
      },
    });
  };
}

export default App;
