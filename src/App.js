import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Button, Icon} from 'react-native-elements';

import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({navigation}) => {
            return {
              title: 'User List',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('UserForm')}
                  type="solid"
                  icon={<Icon name="add" size={25} color="#fff" />}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: 'User Form',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#1abc9c',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
