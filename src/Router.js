import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Product from './pages/products/Product';
import ProductForm from './pages/products/form/ProductForm';
import Login from './pages/login/Login';
import SignInForm from './pages/login/sign-in/SignIn';

import * as CONST from './helpers/Constants'

import { capitalizeFristLetter } from './utils/Utils';


const App = createStackNavigator({
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
    navigationOptions: () =>  {
      return ({
        title: CONST.CREATE_ACCOUNT,
        headerTitleStyle: { textAlign: 'left' }
      });
    }
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

const Router = createAppContainer(App);

export default Router;
