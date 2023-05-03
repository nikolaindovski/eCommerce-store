import React, { Component } from "react";

class Category extends Component {
  state = {};
  render() {
    return (
      <span onClick={()=>this.props.onCategoryClick(this.props.category)} className={this.getClasses()}>
        {this.props.category.name}
      </span>
    );
  }

  getClasses() {
    return this.props.category.active === 1 ? "categoryActive" : "category";
  }
}

export default Category;
