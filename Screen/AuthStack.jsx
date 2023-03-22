import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from 'firebase/auth';


const AuthStack = () => {
  const Stack =createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{header:()=>null}}>
    <Stack.Screen name='login' >
      {(props)=><Login {...props} method={signInWithEmailAndPassword} title='Log In' dis='flex' />}
    </Stack.Screen>
    <Stack.Screen name='signup'>
    {(props)=><Login {...props} method={createUserWithEmailAndPassword} title='Sign Up' dis='none'/>}
    </Stack.Screen>
</Stack.Navigator>
  );
}

export default AuthStack