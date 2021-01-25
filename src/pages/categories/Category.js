import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import CategoryList from './list/CategoryList';
import ErrorComponent from '../../layout/error/ErrorComponent';
import LoadingComponent from '../../layout/loading/LoadingComponent';

import * as Env from './../../helpers/Env';
import * as CONST from './../../helpers/Constants';
import Axios from 'axios';

export default class Category extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: false,
      hasError: false
    };
  }

  componentDidMount() {
    this.setState({ hasError: false, loading: true })
    Axios
      .get(`${Env.LOCALHOST}${Env.CATEGORIES}`)
      .then(resp => {
        const { data } = resp;
        this.setState({
          categories: data,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          hasError: true,
          loading: false
        });
      });
  }

  onRefresh = () => {
    Axios
      .get(`${Env.LOCALHOST}${Env.CATEGORIES}`)
      .then(resp => {
        const { data } = resp;
        this.setState({
          categories: data,
        });
      })
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

  listCategories() {
    return <CategoryList
      categories={this.state.categories}
      navigationDetail={(category) => this.props.navigation.navigate('ProductByCategory', category)}
      onRefreshFn={() => this.onRefresh()} />
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.loading && !this.state.hasError ?
            this.listCategories() :
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
