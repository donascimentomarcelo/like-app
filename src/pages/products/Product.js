import React from 'react';
import { View, StyleSheet } from 'react-native';

import Axios from 'axios';
import ProductList from './list/productList';
import ErrorComponent from '../../layout/error/ErrorComponent';
import LoadingComponent from '../../layout/loading/LoadingComponent';

import * as CONST from './../../helpers/Constants';
import * as ENV from './../../helpers/Env';

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false,
      hasError: false
    };
  }

  componentDidMount() {
    let products = [];

    if (this.props.navigation.state.params) {
      products = this.props.navigation.state.params.category.products;
    }

    if (!products.length) {
      this.getAllProducts();
      return;
    }
    this.setState({ products });
  }

  getAllProducts() {
    this.setState({ hasError: false, loading: true });
    Axios
      .get(`${ENV.LOCALHOST}${ENV.PRODUCTS}`)
      .then(resp => {
        const { data } = resp;
        this.setState({
          products: data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          loading: false
        });
      });
  }

  renderError() {
    return <ErrorComponent
      hasError={this.state.hasError}
      message={CONST.SOMETHING_IS_WROG} />
  }

  loading() {
    return <LoadingComponent
      loading={this.state.loading}
      hasError={this.state.hasError}
      size={CONST.LARGE}
      color={CONST.PRIMARY} />

  }

  onRefresh = () => {
    Axios
      .get(`${ENV.LOCALHOST}${ENV.PRODUCTS}`)
      .then(resp => {
        const { data } = resp;
        this.setState({
          products: data,
        });
      })
  }

  listProducts() {
    return <ProductList
      products={this.state.products}
      navigationDetail={(product) => this.props.navigation.navigate('ProductDetails', product)}
      onRefreshFn={() => this.onRefresh()} />
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.loading && !this.state.hasError ?
            this.listProducts() :
            this.loading()
        }
        { this.renderError()}
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