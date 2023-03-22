import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform,StyleSheet ,Image,TextInput,Pressable} from 'react-native';
import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Login from './Screen/Login';
import { GiftedChat } from 'react-native-gifted-chat';
import Topnavigation from './Screen/Topnavigation';
import Home from './Screen/Home';
import AuthenticationProvider from './State/Authentication';



export default function App() {

return <>
<AuthenticationProvider>
<Topnavigation/>
</AuthenticationProvider>




    </>
}

const styled = StyleSheet.create({
})
