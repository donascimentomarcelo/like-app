import React from 'react';
import { View } from 'react-native';

import Axios from 'axios';
import ProductList from './list/productList';

export default class ProductComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios
      .get('http://192.168.55.101:8080/products')
        .then(resp => {
          const { data } = resp;
          this.setState({products: data})
        })
        .catch(error => console.log(error));
  }

  render () {
    return (
      <View>
          <ProductList products={this.state.products}/>
      </View>
    )
  }
}