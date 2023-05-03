import React, { Component } from "react";
import Category from "./category";
import logo from "../a-logo.png";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <nav>
          {this.props.categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              onCategoryClick={this.props.onCategoryClick}
            ></Category>
          ))}
          <img src={logo}></img>
          <div className="spacerActions"></div>
          <div className="actions">
            <div className="currency">$ @</div>
            <div className="cart">kosnicka</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
