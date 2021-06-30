/**
 * Lembrar de adicionar os icones 
 * 
 * yarn add @expo/vector-icons
 */
import React from 'react';

import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export function MyInput(props){
    
    return(
            <View style={styles.viewInput}>
                <AntDesign name={props.iconName} size={24} color="black"  />
                <TextInput
                    placeholder={props.textInput}
                    placeholderTextColor="#555"
                    {...props}
                    style={styles.input} />
            </View>
    )
}


const styles = StyleSheet.create({

    viewInput:{
        margin: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:'#A6AAB4',
        borderRadius: 10,
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#FFFFFF',
        margin: 10,
        flex: 1,
        color: '#000000',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 10 : 5,
        borderRadius: 7
    },
   
   
});