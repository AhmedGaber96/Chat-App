import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { color } from "react-native-reanimated";
const catImageUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color='white' style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius:30,
                        marginRight: 15,
                      
                    }}
                />
            ),
            headerTitleAlign: 'center',
            headerTitleStyle:{

              color:"white"
            },
            headerStyle:{
              backgroundColor:'#f57c00',
    
        
            }
            
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color='#FAFAFA' />
            </TouchableOpacity>
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#343541",
        },
        chatButton: {
            backgroundColor: '#f57c00',
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#ff8104',
            shadowOffset: {
                width: 100,
                height: 100,
            },
            shadowOffset: {
              width: 50,
              height: 70,
          },
          shadowOpacity: 1,
          shadowRadius: 8,
          marginRight: 20,
          elevation: 8,
          marginBottom: 50,
        }
    });