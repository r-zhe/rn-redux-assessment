import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from "../screens/LandingPage";
import DisplayUsers from "../screens/DisplayUsers";
import AddUser from '../screens/AddUser';
import EditUser from '../screens/EditUser';
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
            options={{ title: 'Home' }}
        />

        <AppNavigator.Screen
            name="DisplayUsers"
            component={DisplayUsers}
            options={{ title: 'Display Users' }}
        />

        <AppNavigator.Screen
            name="AddUser"
            component={AddUser}
            options={{ title: 'Add User' }}
        />

        <AppNavigator.Screen
            name="EditUser"
            component={EditUser}
            options={{ title: 'Edit User' }}
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