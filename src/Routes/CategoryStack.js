import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Header from '../layout/header/Header';

import * as CONST from '../helpers/Constants';

import { capitalizeFristLetter } from '../utils/Utils';
import Category from '../pages/categories/Category';

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
    // ProductDetails: {
    //     screen: ProductDetails,
    //     navigationOptions: ({ navigation }) => {
    //         const productName = navigation.state.params.product.name;
    //         return {
    //             headerTitle: () => <Header 
    //                                     title={capitalizeFristLetter(productName)}
    //                                     navigation={navigation}
    //                                     detailsType={true}/>
    //         }
    //     }
    // }
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