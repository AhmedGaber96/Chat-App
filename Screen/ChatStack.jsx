import React from 'react'
import Chat from './Chat';
import Home from './Home';

import { createStackNavigator } from '@react-navigation/stack';

const ChatStack = () => {
  const Stack =createStackNavigator();
    return (
        <Stack.Navigator defaultScreenOptions={Home} >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Chat' component={Chat} />
        </Stack.Navigator>
      );
}

export default ChatStack