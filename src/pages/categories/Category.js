import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CategoryList from './list/CategoryList';

import * as CONST from './../../helpers/Constants';
import * as Env from './../../helpers/Env';
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
        this.setState({hasError: false, loading: true})
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

    render() {
        return (
            <View style={styles.container}>
                <CategoryList
                    categories={this.state.categories}
                    navigationDetail={(category) => this.props.navigation.navigate('CategoryDetails', category)}/>
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
