import React from 'react'
import { useState } from 'react'
import { Modal, View,StyleSheet,Text ,Image,Pressable} from 'react-native'

const Warning = ({visiblty,close}) => {
    const [backbuttomgroundColor, setbuttomBackgroundColor] = useState('#A259FF');
  return<>
  <Modal visible={visiblty}>
  <View style={styled.mainContainer}>
  <View style={styled.container}>
  <Image source={require('../assets/kindpng_2601539.png')} style={styled.modalImage}  resizeMode='center'/>
        <Text style={{color:'white',fontSize:20}}>Email or Password Empty</Text>
        <Pressable onPress={close} onPressIn={()=>setbuttomBackgroundColor('#bb88fe')} onPressOut={()=>setbuttomBackgroundColor('#A259FF')} style={[styled.warningButtom,{backgroundColor:backbuttomgroundColor}]} ><Text style={{color:'white',fontSize:18}}>Ok</Text></Pressable>
    </View>

  </View>
  </Modal>
  </>
}

export default Warning
const styled = StyleSheet.create({
    container:{
        backgroundColor:'#2B2B2B',
        width:300,
        height:300,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:"space-between",
    },
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#000000c3"
    },
    modalImage:{
        width:100,
        height:100,
    },
    warningButtom:{
        width:"100%",
        paddingVertical:15,
        alignItems:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,

    }

})