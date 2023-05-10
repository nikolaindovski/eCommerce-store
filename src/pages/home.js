import React, { Component } from "react";
import Product from "../components/product";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="title">{this.categoryName()}</div>
        <div className="gridContainer">
          {this.props.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onProductClick={this.props.onProductClick}
              currencyRate={this.props.currencyRate}
              currencySymbol={this.props.currencySymbol}
            />
          ))}
        </div>
      </div>
    );
  }

  categoryName() {
    return this.props.categories.map((category) =>
      category.active === 0 ? "" : category.name
    );
  }
}

export default Home;
