import React, {Component} from 'react';
import {connect} from 'react-redux'
import FilterProducts from './FilterProducts';
import '../styles/ProductsList.css'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
        const {products} = this.props;
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property



        return (
            <ul className="ProductList">
            {
              products.map(item => <Product product={item} /> )
            }
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
  console.log('mystate', state);
  console.log(state.filter);
    let products = [];


    // complete the `if else` statement including conditions and `products` value
    if (state.filter === 'overTwenty') {
      products = state.products.filter(item => parseInt(item.price) > 20 );
    }
    else if (state.filter === 'underTwenty') {
      products = state.products.filter(item => parseInt(item.price) < 20 );
    } else {
      products = state.products.filter(item => parseInt(item.price) > 0 );
    }

    return {products: products}
}

export default connect(mapStateToProps)(ProductList);
