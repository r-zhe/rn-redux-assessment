import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from "../screens/LandingPage";
import DisplayUsers from "../screens/DisplayUsers";
import AddEditUser from '../screens/AddEditUser';
import ClearUsers from '../screens/ClearUsers';

const AppNavigator = createStackNavigator();

const AppNavigation = () => {
  return(
      <AppNavigator.Navigator
          initialRouteName="Index"
      >
        <AppNavigator.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ title: 'Index' }}
        />

        <AppNavigator.Screen
            name="DisplayUsers"
            component={DisplayUsers}
            options={{ title: 'Users' }}
        />

        <AppNavigator.Screen
            name="AddEditUser"
            component={AddEditUser}
            options={{ title: 'Add or Edit User' }}
        />

        <AppNavigator.Screen
            name="ClearUsers"
            component={ClearUsers}
            options={{ title: 'Clear User' }}
        />

      </AppNavigator.Navigator>
  )
}

export default AppNavigation;