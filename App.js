import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductComponent from './src/components/products/Product';

import * as CONST from './src/helpers/Constants'

const AppNavigator = createStackNavigator({
  Main: {
    screen: ProductComponent
  }
}, {
  defaultNavigationOptions: {
    title: CONST.TITLE,
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
