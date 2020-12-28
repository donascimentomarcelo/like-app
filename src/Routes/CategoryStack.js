import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Header from '../layout/header/Header';

import * as CONST from '../helpers/Constants';

import { capitalizeFristLetter } from '../utils/Utils';
import Category from '../pages/categories/Category';
import Product from '../pages/products/Product';

const screens = {
    Category: {
        screen: Category,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header 
                                        title={CONST.CATEGORIES}
                                        navigation={navigation}/>
            }
        }
    },
    ProductByCategory: {
        screen: Product,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: CONST.PRODUCTS
            }
        }
    },
};

const CategoryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: CONST.SECONDARY,
        headerStyle: {
           backgroundColor: CONST.PRIMARY,
           borderBottomWidth: 1,
           borderBottomColor: CONST.PRIMARY,
         }
     }
});

export default CategoryStack;