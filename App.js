import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Product from './src/pages/products/Product';
import ProductForm from './src/pages/products/form/ProductForm';
import Login from './src/pages/login/Login';
import SignInForm from './src/pages/login/sign-in/SignIn';

import * as CONST from './src/helpers/Constants'

import { capitalizeFristLetter } from './src/utils/Utils';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: Product
  },
  ProductForm: {
    screen: ProductForm,
    navigationOptions: ({ navigation }) => {
      const productName = navigation.state.params.product.name;
      return ({
        title: capitalizeFristLetter(productName),
        headerTitleStyle: {
           textAlign: 'left'
        }
      });
    }
  }, 
  SignInForm: {
    screen: SignInForm,
    navigationOptions: () =>  ({title: CONST.CREATE_ACCOUNT})
  }
}, {
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

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
