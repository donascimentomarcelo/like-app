import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Product from '../pages/products/Product';
import Header from '../layout/header/Header';

import * as CONST from '../helpers/Constants';

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
};

const ProductStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
           backgroundColor: CONST.PRIMARY,
           borderBottomWidth: 1,
           borderBottomColor: CONST.PRIMARY,
         }
     }
});

export default ProductStack;