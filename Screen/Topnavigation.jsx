import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Signup from './Signup';
import { useContext } from 'react';
import ChatStack from './ChatStack';
import AuthStack from './AuthStack';
import { AuthenticationContext } from '../State/Authentication';



 const Stack =createStackNavigator();
function Topnavigation() {
  let {currentUser}=useContext(AuthenticationContext)

  return <>
  <NavigationContainer>
    {currentUser?<ChatStack/>:<AuthStack/>}

  </NavigationContainer>
  </>
}

export default Topnavigation