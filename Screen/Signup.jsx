// import React from 'react'
// import { Text, View, Button, Platform,StyleSheet ,Image,TextInput,Pressable,TouchableOpacity} from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { auth } from '../config/firebase';
// import {database} from '../config/firebase'
// import { useState } from 'react';
// function Signup({navigation,name}) {
//     const [email, setemail] = useState(null)
//     const [password, setpassword] = useState('')
//     const onLogin= async()=>{
//       try{
//          await name(auth,email,password)
//       } catch(err){
//         console.log(err);
//       }
//     }
//   return <>
//   <StatusBar style="light" />
// <View style={styled.mainView}>
// <Image source={require('../assets/kindpng_2601539.png')} style={styled.imgStyle} resizeMode='center'/>
// <View style={{marginTop:10}}>
// <Text style={styled.mainheader}>Sign Up</Text>
// </View>
// <View style={{marginTop:50}}>
// <TextInput style={styled.textinputStyle} placeholder='Enter you Email'  cursorColor='#2B2B2B' value={email} onChangeText={(e)=>{setemail(e)}} textContentType='emailAddress'/>
// <TextInput secureTextEntry  style={styled.textinputStyle} placeholder="Enter Password" cursorColor='#2B2B2B' value={password} onChangeText={(e)=>{setpassword(e)}} textContentType='password'/>

// </View>
// <Pressable style={styled.buttomreg} onPress={()=>{onLogin()}}><Text style={{fontSize:16,color:'white'}}>Login</Text></Pressable>
// <View style={{flexDirection:'row',alignItems:'center', justifyContent:"center",marginTop:20}}>
// </View>
// </View>

  
//   </>
// }

// export default Signup
// const styled = StyleSheet.create({
//     mainView:{
//         flex:1,
//         alignItems:"center",
//         backgroundColor:'#2B2B2B'

       
//     },
//     imgStyle:{
//         width:150,
//         height:150,
//         marginTop:100,

//     },


//     textinputStyle:{
//         width:300,
//         height:50,
//         backgroundColor:'white',
//         borderRadius:32,
//         color:'black',
//         paddingHorizontal:10,
//         fontSize:20,
//         marginVertical:10
//     },
//     mainheader:{
//         fontSize:32,
//         color:'white'
//     },
//     buttomreg:{
//         width:300,
//         height:50,
//         backgroundColor:"#A259FF",
//         borderRadius:32,
//         marginTop:30,
//         justifyContent:'center',
//         alignItems:'center',
//     }
// })
