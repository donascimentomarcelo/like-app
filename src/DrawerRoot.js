import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import LoginStack from './Routes/LoginStack';
import ProductStack from './Routes/ProductStack';
import CategoryStack from './Routes/CategoryStack';

const RootDrawer = createDrawerNavigator({
    Category: {
        screen: CategoryStack
    },
    Products: {
        screen: ProductStack
    },
    Login: {
        screen: LoginStack
    },
});

export default createAppContainer(RootDrawer);