import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  state = {};
  render() {
    return (
      <Link to="/pdp">
        <div onClick={() => this.props.onProductClick(this.props.product)}>
          <img className="cardImage" src={this.props.product.picture}></img>
          <div className="cardContent">
            <span className="contentTitle">{this.props.product.name}</span>
            <span className="contentPrice">
              {this.props.currencySymbol}{(this.props.product.price * this.props.currencyRate).toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}

export default Product;
