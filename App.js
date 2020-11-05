import React from 'react';
import { View, Text } from 'react-native';
import Header from './src/layout/Header';
import * as CONST from './src/helpers/Constants';

import Axios from 'axios';
import ProductList from './src/components/products/list/productList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios
      .get('http://localhost:8080/products')
        .then(resp => {
          const { data } = resp;
          this.setState({products: data})
        })
        .catch(error => console.log(error));
  }

  render () {
    return (
      <View>
        <Header 
          title={CONST.TITLE}/>
          <ProductList products={this.state.products}/>
      </View>
    )
  }
}