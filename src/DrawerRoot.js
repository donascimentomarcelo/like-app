import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import LoginStack from './Routes/LoginStack';
import ProductStack from './Routes/ProductStack';
import CategoryStack from './Routes/CategoryStack';

const RootDrawer = createDrawerNavigator({
    Login: {
        screen: LoginStack
    },
    Products: {
        screen: ProductStack
    },
    Caegorias: {
        screen: CategoryStack
    },
});

export default createAppContainer(RootDrawer);