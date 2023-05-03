import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className={this.getClasses()}>
        <img className="cardImage" src={this.props.product.picture}></img>
        <div className="spacer"></div>
        <div className="cardContent">
          <span className="contentTitle">{this.props.product.name}</span>
          <span className="contentPrice">{this.props.product.price}</span>
        </div>
      </div>
    );
  }

  getClasses() {
    return "productCard" + this.props.product.id;
  }
}

export default Product;
