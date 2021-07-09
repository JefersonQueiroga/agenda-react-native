import React, { useState, useEffect} from 'react';
import { Text, View,StyleSheet,TouchableOpacity,FlatList, Alert, Keyboard } from 'react-native';
import { MyInput } from '../components/MyInput';
import { ItemContact } from '../components/ItemContact';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home(){
    
    const keyAsyncStorage = "@agenda1:contatos";

    const [user,setUser] = useState('');
    const [phone,setPhone] = useState('');
    //Vetor dos contatos.
    const [contacts,setContacts] = useState([]);

    async function handleSaveContacts() {
        const data ={
            id: String (new Date().getTime()),
            name: user,
            phone: phone
        }

        const vetData = [...contacts, data ]; 

        try{
             await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( vetData ) );
        }catch(error){
            Alert.alert("Erro na gravação de contatos");
        } 

        Keyboard.dismiss();
        setUser("");
        setPhone("");
        loadData();
        
    }

    async function handleDeleteContact( id ) {
        const newData = contacts.filter( item => item.id != id );
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( newData ));
        
        setContacts(newData); 
    }

    async function loadData(){
        try{
            const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
            const teste = JSON.parse( retorno )
            console.log( teste );
            setContacts( teste || [] );
        }catch(error){
            Alert.alert("Erro na leitura dos dados");
        }
    }

    useEffect( ()=>{
        loadData();      
    } , []);

    return(
        <View style={ styles.container}>
            <View style={ styles.head }>
                <Text style={styles.titlehead}>AGENDA TELEFÔNICA - DDM</Text>
            </View>
            
            <View style={styles.formContainer}>
                <MyInput iconName="user" textInput="Digite o nome" value={user} onChangeText={setUser} /> 
                <MyInput iconName="phone" textInput="Digite o telefone" value={phone} onChangeText={setPhone} keyboardType="numeric" /> 

                <TouchableOpacity style={ styles.button } onPress={handleSaveContacts}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>

           <View style={styles.list}>  
                <Text style={styles.titleList}>Lista de Contatos</Text>
               
                <FlatList  data={contacts}  
                    keyExtractor={item => item.id} 
                    renderItem={ ({item}) =>  (
                        <ItemContact nome={ item.name } phone={item.phone} apagar={ () => handleDeleteContact(item.id) }/>
                    ) }
                /> 
            </View>
           
            
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
        padding: 10,
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
    list:{
        width: "90%",
    },
    titleList:{
        marginTop: 40,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});