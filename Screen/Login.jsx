import React from 'react'
import { Text, View, Button, Platform,StyleSheet ,Image,TextInput,Pressable,TouchableOpacity, Alert, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../config/firebase';
import {database} from '../config/firebase'
import { useState } from 'react';
import Warning from './Warning';
function Login({navigation,method,title,dis}) {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState('')
    const [backbuttomgroundColor, setbuttomBackgroundColor] = useState('#A259FF');
    const [modalvisiblty, setmodalvisiblty] = useState(false)
    const hideModal=()=>{
      setmodalvisiblty(false)
    }

    
    const onHandling= async()=>{
      if(email!==''&password!==''){
        try{
          await method(auth,email,password)
       } catch(err){
        Alert.alert('WARNING',"wrong Email or Password")
         
       }
      }
      else{
        setmodalvisiblty(true)

      }
     
    }
    
  return <>
  <StatusBar style="light" />
<View style={styled.mainView}>
 <Warning visiblty={modalvisiblty} close={hideModal} />
<Image source={require('../assets/kindpng_2601539.png')} style={styled.imgStyle} resizeMode='center'/>
<View style={{marginTop:10}}>
<Text style={styled.mainheader}>{title}</Text>
</View>
<View style={{marginTop:50}}>
<TextInput style={styled.textinputStyle} placeholder='Enter you Email'  cursorColor='#2B2B2B' value={email} onChangeText={(e)=>{setemail(e)}} textContentType='emailAddress'/>
<TextInput secureTextEntry  style={styled.textinputStyle} placeholder="Enter Password" cursorColor='#2B2B2B' value={password} onChangeText={(e)=>{setpassword(e)}} textContentType='password'/>

</View>
<Pressable onPressIn={()=>setbuttomBackgroundColor('#bb88fe')} onPressOut={()=>setbuttomBackgroundColor('#A259FF')} style={[styled.buttomreg,{backgroundColor:backbuttomgroundColor}]} onPress={()=>{onHandling()} }><Text style={{fontSize:16,color:'white'}}>Login</Text></Pressable>
<View  style={{flexDirection:'row',alignItems:'center', justifyContent:"center",marginTop:20,display:dis}}>
<Text  style={{ color:'white',fontSize:14, fontWeight:600}}>Don't have an account ? </Text> 
<TouchableOpacity  onPress={()=>navigation.navigate('signup')}>
<Text style={{color:'#A259FF',fontSize:14,marginLeft:4,fontWeight:600}} >Sign Up</Text>
</TouchableOpacity>
</View>
</View>

  
  </>
}

export default Login
const styled = StyleSheet.create({
    mainView:{
        flex:1,
        alignItems:"center",
        backgroundColor:'#343541'

       
    },
    imgStyle:{
        width:150,
        height:150,
        marginTop:100,

    },


    textinputStyle:{
        width:300,
        height:50,
        backgroundColor:'white',
        borderRadius:32,
        color:'black',
        paddingHorizontal:10,
        fontSize:20,
        marginVertical:10
    },
    mainheader:{
        fontSize:32,
        color:'white'
    },
    buttomreg:{
        width:300,
        height:50,
        borderRadius:32,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
    }
})
