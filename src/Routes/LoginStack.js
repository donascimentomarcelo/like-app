import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/login/Login';
import Header from './../layout/header/Header';

import * as CONST from './../helpers/Constants';

const screens = {
    Login: {
        screen: Login,
    },
};

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        title: CONST.TITLE,
        headerTintColor: CONST.SECONDARY,
        headerStyle: {
          backgroundColor: CONST.PRIMARY,
          borderBottomWidth: 1,
          borderBottomColor: CONST.PRIMARY,
        },
        headerTitleStyle: {
          color: CONST.SECONDARY,
          fontSize: 20,
    
          flexGrow: 1,
          textAlign: 'center'
        }
    }
});

export default LoginStack;