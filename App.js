import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductComponent from './src/components/products/Product';
import ProductForm from './src/components/products/form/ProductForm';

import * as CONST from './src/helpers/Constants'

import { capitalizeFristLetter } from './src/utils/Utils';


const AppNavigator = createStackNavigator({
  Main: {
    screen: ProductComponent
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
