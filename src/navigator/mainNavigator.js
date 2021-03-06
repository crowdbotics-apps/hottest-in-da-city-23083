import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49180274Navigator from '../features/BlankScreen49180274/navigator';
import Maps180255Navigator from '../features/Maps180255/navigator';
import Additem180254Navigator from '../features/Additem180254/navigator';
import Maps180250Navigator from '../features/Maps180250/navigator';
import UserProfile180246Navigator from '../features/UserProfile180246/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49180274: { screen: BlankScreen49180274Navigator },
Maps180255: { screen: Maps180255Navigator },
Additem180254: { screen: Additem180254Navigator },
Maps180250: { screen: Maps180250Navigator },
UserProfile180246: { screen: UserProfile180246Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
