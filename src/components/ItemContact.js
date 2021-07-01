import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export function ItemContact(props){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textContact}>{props.nome}</Text>
                <Text>{props.phone}</Text>
            </View>
            <TouchableOpacity onPress={props.apagar}>
                <MaterialIcons name="delete" size={28} color="black" />           
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      height: 65,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F4F4F4',
      borderWidth: 1,
      borderColor: '#B6B4B4',
      borderRadius: 10,
      margin: 10,

    },
    textContact:{
        fontSize: 18,
        fontWeight: 'bold'
    }

})