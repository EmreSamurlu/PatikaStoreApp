import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const MsgPage = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="MessagesPage"
          component={Messages}
          options={{
            headerShown: true,
            title: 'dertler',
            headerTintColor: colors.taxiyellow,
            headerTitleAlign: 'center',
            headerBackVisible: Platform.OS === 'android' ? true : false,
            headerStyle: {
              backgroundColor: colors.mygrey,
            },
            headerRight: () => (
              <Icon
                name="logout-variant"
                size={30}
                color={colors.taxiyellow}
                onPress={() => auth().signOut()}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? AuthStack() : MsgPage()}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
