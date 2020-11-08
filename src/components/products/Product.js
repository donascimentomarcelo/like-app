import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import Axios from 'axios';
import ProductList from './list/productList';

export default class ProductComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    Axios
      .get('http://192.168.55.101:8080/products')
        .then(resp => {
          const { data } = resp;
          this.setState({
            products: data,
            loading: false
          })
        })
        .catch(error => console.log(error));
  }

  render () {
    return (
      <View style={styles.container}>
          { 
            this.state.loading ? 
            <ActivityIndicator size='large' color='red'/> : 
            <ProductList 
                products={this.state.products}
                navigationDetail={(product) => this.props.navigation.navigate('ProductForm', product)}/> 
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
})