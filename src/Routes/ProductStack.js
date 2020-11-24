import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Header from '../layout/header/Header';

import * as CONST from '../helpers/Constants';

import Product from '../pages/products/Product';
import ProductDetails from '../pages/products/form/ProductDetails';
import { capitalizeFristLetter } from '../utils/Utils';

const screens = {
    Product: {
        screen: Product,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header 
                                        title={CONST.PRODUCTS}
                                        navigation={navigation}/>
            }
        }
    },
    ProductDetails: {
        screen: ProductDetails,
        navigationOptions: ({ navigation }) => {
            const productName = navigation.state.params.product.name;
            return {
                headerTitle: () => <Header 
                                        title={capitalizeFristLetter(productName)}
                                        navigation={navigation}
                                        detailsType={true}/>
            }
        }
    }
};

const ProductStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: CONST.SECONDARY,
        headerStyle: {
           backgroundColor: CONST.PRIMARY,
           borderBottomWidth: 1,
           borderBottomColor: CONST.PRIMARY,
         }
     }
});

export default ProductStack;