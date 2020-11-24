import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginStack from './Routes/LoginStack';
import ProductStack from './Routes/ProductStack';

const RootDrawer = createDrawerNavigator({
    Login: {
        screen: LoginStack
    },
    Products: {
        screen: ProductStack
    },
});

export default createAppContainer(RootDrawer);