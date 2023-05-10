import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  state = {};
  render() {
    return (
      <Link className="categoryLink" to="/">
        <span
          onClick={() => this.props.onCategoryClick(this.props.category)}
          className={this.getClasses()}
        >
          {this.props.category.name}
        </span>
      </Link>
    );
  }

  getClasses() {
    return this.props.category.active === 1 ? "categoryActive" : "category";
  }
}

export default Category;
