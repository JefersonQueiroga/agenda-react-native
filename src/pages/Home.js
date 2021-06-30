import React, { useState } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import { MyInput } from '../components/MyInput';


export function Home(){
    const [user,setUser] = useState('');
    const [phone,setPhone] = useState('');
    const [contacts,setContacts] = useState([]);

    function handleSaveContacts() {
        const data ={
            id: String (new Date().getTime()),
            name: user,
            phone: phone
        }
        console.log(data)
        setContacts(oldState => [...oldState,data]);
        setUser("");
        setPhone("");
    }

    return(
        <View style={ styles.container}>
            <View style={ styles.head }>
                <Text style={styles.titlehead}>AGENDA TELEFÔNICA - DDM</Text>
            </View>
            
            <View style={styles.formContainer}>
                <MyInput iconName="user" textInput="Digite o nome" value={user} onChangeText={setUser}/> 
                <MyInput iconName="phone" textInput="Digite o telefone" value={phone} onChangeText={setPhone} keyboardType="numeric" /> 

                <TouchableOpacity style={ styles.button } onPress={handleSaveContacts}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
           
            <Text>{ contacts.length }</Text>
            <FlatList  data={contacts}  
                keyExtractor={item => item.id} 
                renderItem={ ({item}) =>  (
                   <Text>{item.name}</Text>
                ) }
            /> 
        </View>

    );
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 40,
        alignItems: 'center',
    },
    head:{
        width: '100%',
        height: 35,
        backgroundColor: '#613EEA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlehead:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    formContainer:{
        width: "85%",
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        backgroundColor: '#613EEA',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        width: 240,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },

});

