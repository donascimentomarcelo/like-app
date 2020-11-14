import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Product from './src/pages/products/Product';
import ProductForm from './src/pages/products/form/ProductForm';
import Login from './src/pages/login/Login';

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
  }
}, {
  defaultNavigationOptions: {
    title: CONST.TITLE,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,

      flexGrow: 1,
      textAlign: 'center'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
