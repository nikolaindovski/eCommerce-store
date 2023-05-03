import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Product from "./components/product";
import shirt from "./product_images/shirt.jpg";
import tshirt from "./product_images/t-shirt.jpg";
import jacket from "./product_images/jacket.jpg";
import hoodie from "./product_images/hoodie.jpg";
import jeans from "./product_images/jeans.jpg";
import boots from "./product_images/boots.jpg";

class App extends Component {
  state = {
    categories: [
      { id: 1, name: "WOMAN", active: 1 },
      { id: 2, name: "MAN", active: 0 },
      { id: 3, name: "KIDS", active: 0 },
    ],
    products: [
      { id: 1, name: "shirt", price: 35, picture: shirt },
      { id: 2, name: "t-shirt", price: 45, picture: tshirt },
      { id: 3, name: "jacket", price: 55, picture: jacket },
      { id: 4, name: "hoodie", price: 65, picture: hoodie },
      { id: 5, name: "jeans", price: 75, picture: jeans },
      { id: 6, name: "boots", price: 85, picture: boots },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="rectangle">
          <NavBar
            categories={this.state.categories}
            onCategoryClick={this.handleCategoryChange}
          />
          <div className="title">{this.categoryName()}</div>
          {this.state.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </React.Fragment>
    );
  }

  categoryName() {
    return this.state.categories.map((category) =>
      category.active === 0 ? "" : category.name
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
  };
}

export default App;
