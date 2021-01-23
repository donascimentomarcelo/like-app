import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/login/Login';
import SignIn from '../pages/login/sign-in/SignIn';
import Header from './../layout/header/Header';

import * as CONST from './../helpers/Constants';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header
                    title={CONST.TITLE}
                    searchBar={false}
                    navigation={navigation} />
            }
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: () => {
            return {
                headerTitle: CONST.NEW_USER
            }
        }
    },
};

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: CONST.SECONDARY,
        headerStyle: {
            backgroundColor: CONST.PRIMARY,
            borderBottomWidth: 1,
            borderBottomColor: CONST.PRIMARY,
        }
    }
});

export default LoginStack;