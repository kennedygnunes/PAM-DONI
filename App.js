import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [nome,setNome] = useState("Insira seu nome e descubra seu time do coração!")
  const [entrada,setEntrada] = useState()


  useEffect(()=>{


    async function buscarNome(){

      const storageNome = await AsyncStorage.getItem('nome');

      if(storageNome !== null){
        setNome(storageNome)
      }

    }

    buscarNome();
  


  },[])


  useEffect(()=>{

  async function gravarNome(){

    await AsyncStorage.setItem('nome',nome)

  }
  
  gravarNome();

  },[nome] )



  function alterarNome(){

    setNome(entrada)

  }

  return (
    <View style={styles.container}>
      <TextInput style = {styles.entrada} onChangeText = {(texto)=> setEntrada(texto)}></TextInput>
      <Button style = {styles.botao} title = "alterar nome " onPress={alterarNome}></Button>
      <Text style={{fontSize:20, marginTop:10}}>{nome}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'lightgray',
    
  },
  botao:{
    width:'100&',
    marginBottom:15
  },
  entrada:{
    borderWidth:2,
    marginBottom:5,
    marginTop:10,
    borderColor: 'black',
    width: '100%'
  }
});
